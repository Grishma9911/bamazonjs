var mysql = require("mysql");
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

connection.connect(function(err) {
  if (err){
    console.log("connected as id " + connection.threadId);
  }
 
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}
var  inquirer = require("inquirer");

inquirer.prompt([
  {
    name: "product",
    message: "View Products for sale: ",
    type: "input"
  }, {
    name: "inventory",
    message: "View Low Inventory: ",
    type: "input"
  }, {
    name: "add inventory",
    message: "Add to Inventory: ",
    type: "input"
  }, {
    name: "inventory",
    message: "Add New Product: ",
    type: "input"
  }
]).then(function(answers) {
    var newProducts = new Products(answers.item_id, answers.department_name,answers.product_name, answers.price, answers.stock_quantity);

    function product(item_id, product_name, price, stock_quantity){
        this.item_id = item_id;
        this.product_name = product_name;
        this.price = price;
        this.stock_quantity = stock_quantity;

        this.readProfile = function(){
            if(newProducts === true){
                // console.log(this)
                this.push(new product(item_id, product_name, price, stock_quantity));
            }
        }
    }
      });
      module.exports = product;   

      