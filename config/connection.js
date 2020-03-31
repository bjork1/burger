var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

module.exports = {
  HOST: "us-cdbr-iron-east-01.cleardb.net",
  USER: "bac8b43aee7a0b",
  PASSWORD: "4159c8d6",
  DB: "heroku_0e23a815733059d"
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
