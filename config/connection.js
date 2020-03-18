var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  connection.query("SELECT * FROM parties", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

module.exports = connection;
