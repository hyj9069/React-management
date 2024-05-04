const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysqld = require("mysql");

const connection = mysqld.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM customer", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log("err : ", err);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
