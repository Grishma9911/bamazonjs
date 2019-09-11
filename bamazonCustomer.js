var mysql = require("mysql");
var  inquirer = require("inquirer");
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
]).then(function(answers) {
  console.log(answers);
  connection.query("SELECT stock_quantity FROM products where ?", { item_id: answers.id}, function(err, res) {
    console.log(res)
    if(res <= answers.number){
      console.log("sold!!!")
    }
  })
  // console.log(answers)
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  // var newProducts = new Products(answers.item_id, answers.stock_quantity);
  // printInfo method is run to show that the newProgrammer object was successfully created and filled
  // newProducts.printInfo();
  // function Products(item_id, stock_quantity) {
  //   this.item_id = item_id;
  //   this.stock_quantity = stock_quantity;

  //   // this.printInfo = function() {
  //     this.readProfile = function() {
  //       var stock_quantity = "";
    
  //       if (this.newProducts === stock_quantity) {
  //         console.log("Your order has been placed!");
  //         console.log("Your product" + this.item_id + "with" + this.stock_quantity + "has been placed!");
  //       }
  //       else {
  //         console.log("Insufficient quantity1111111!")
  //       }
  //       console.log(newProducts);
  //     };
  //   };
});
    connection.end();
  });
}
////////////////

// qus & ans:
