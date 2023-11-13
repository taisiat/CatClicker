const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = 5000;
const cors = require("cors");

const db = mysql.createConnection({
  password: "",
  user: "root",
  host: "localhost",
});

db.connect((err) => {
  if (err) {
    throw console.error();
  } else {
    console.log("mysql connected");
    db.query("CREATE DATABASE IF NOT EXISTS catclick", (err) => {
      if (err) {
        throw err;
      }
      console.log("database created");
    });
    db.query("USE catclick", (err) => {
      if (err) {
        throw err;
      }
      console.log("database selected");
    });
    db.query("DROP TABLE IF EXISTS cats;", (err) => {
      if (err) {
        throw err;
      }
      console.log("remove old table");
    });
    db.query(
      "CREATE TABLE cats (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), url VARCHAR(255), clicks INT DEFAULT 0)",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("new table created");
      }
    );
    addCats();
  }
});

async function addCats() {
  let sql = "INSERT INTO cats (name, url) VALUES (?, ?)";
  let catsInfo = [
    ["Tom", "http://placekitten.com/601/350"],
    ["Jerry", "http://placekitten.com/602/350"],
    ["Rally", "http://placekitten.com/603/350"],
    ["Lex", "http://placekitten.com/604/350"],
    ["Manoj", "http://placekitten.com/605/361"],
  ];
  for (let cat of catsInfo) {
    db.query(sql, [cat[0], cat[1]]);
  }
}

app.use(cors());
app.use(express.json());

//get cats from mysql db
app.get("/getCatsDB", (req, res) => {
  console.log("get cats db");
  const query = "SELECT * FROM cats";
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//get cats from json
app.get("/getCats", (req, res) => {
  const response = JSON.stringify([
    {
      id: "cat1",
      name: "Tom",
      url: "http://placekitten.com/601/350",
      clicks: 0,
    },

    {
      id: "cat2",
      name: "Jerry",
      url: "http://placekitten.com/602/350",
      clicks: 0,
    },

    {
      id: "cat3",
      name: "Rally",
      url: "http://placekitten.com/603/350",
      clicks: 0,
    },

    {
      id: "cat4",
      name: "Lex",
      url: "http://placekitten.com/604/350",
      clicks: 0,
    },

    {
      id: "cat5",
      name: "Manoj",
      url: "http://placekitten.com/605/361",
      clicks: 0,
    },
  ]);
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
