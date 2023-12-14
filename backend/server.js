const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = 5000;
const cors = require("cors");

const db = mysql.createConnection({
  password: process.env.MYSQL_ROOT_PASSWORD || "",
  user: process.env.MYSQL_USER || "root",
  host: process.env.MYSQL_HOST || "localhost",
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
    // ["Tom", "http://placekitten.com/601/350"],
    // ["Jerry", "http://placekitten.com/602/350"],
    // ["Rally", "http://placekitten.com/603/350"],
    // ["Lex", "http://placekitten.com/604/350"],
    // ["Manoj", "http://placekitten.com/605/361"],
    [
      "Tom",
      "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "Jerry",
      "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "Rally",
      "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "Lex",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "Manoj",
      "https://images.unsplash.com/photo-1598188306155-25e400eb5078?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  ];
  for (let cat of catsInfo) {
    db.query(sql, [cat[0], cat[1]]);
  }
}

app.use(cors());
app.use(express.json());

//get cats from mysql db
app.get("/getCatsDB", (req, res) => {
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
