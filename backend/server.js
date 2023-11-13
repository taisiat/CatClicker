const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());

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
