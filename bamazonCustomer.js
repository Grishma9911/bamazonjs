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

  connection.query("SELECT * FROM products", function (err, res) {

    if (err) throw err;
    console.table(res);
    gotIt();
  })
}

function gotIt() {

  inquirer.prompt([
    {
      name: "id",
      message: "Id of the product: ",
      type: "input"
    }, {
      name: "number",
      message: "Number of the units: ",
      type: "input"
    }
  ]).then(function (answers) {
    var query = "SELECT item_id, stock_quantity FROM products WHERE item_id = ?";
    connection.query(query, [answers.id], function (err, res) {
      if (err) throw err;
      console.log("You just placed an order!!!!!")
      for (var i = 0; i < res.length; i++) {
        if (res[0].stock_quantity >= (answers.number)) {
          console.log("Your order" + answers.id + answers.product_name + "has been placed!!!")
        } else {
          console.log("Insuficient quantity!!!!")
        }
      }
      connection.end();
    });
  });
}

// Point 8- remaining quantity needs to be done.