var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Grishu9911@",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) {
    console.log("connected as id " + connection.threadId);
  }
  afterConnection();
});

function afterConnection() {

  connection.query("SELECT * FROM departments", function (err, res) {

    if (err) throw err;
    console.table(res);
  })
}

// needs to be done.....