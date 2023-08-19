const express = require("express");
const fs = require("fs");
const PORT = 3000;

const app = express();
const jsonDataPath = "data/dbase.json";
let dataObject = {};

const readFile = () => {
  fs.readFile(jsonDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      dataObject = JSON.parse(data);
      console.log("json file read successfully");
    } catch (error) {
      console.error(error);
    }
  });
};

// fs.watch(jsonDataPath, (event, filename) => {
//   if (event === "change") {
//     console.log("file changed");
//     readFile();
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/data", (req, res) => {
  readFile();
  res.json(dataObject);
});
