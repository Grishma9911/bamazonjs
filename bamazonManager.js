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
//   afterConnection();
//   createProduct();
  runSearch();
});

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View Products for sale: ",
          "View Low Inventory: ",
          "Add to Inventory: ",
          "Add New Product: ",
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View Products for sale: ":
          viewProduct();
          break;
  
        case "View Low Inventory: ":
            lowInventory();
          break;
  
        case "Add to Inventory: ":
          createProduct();
          break;
  
        case "Add New Product: ":
          updateProduct();
          break;
  
        }
      });
  }

  function viewProduct() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "Product List: "
    })
    .then(function(answer) {
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            console.table(res);
        runSearch();
      });
    });
}

function lowInventory() {
    inquirer
      .prompt({
        name: "artist",
        type: "input",
        message: "View Low On Inventory: "
      })
      .then(function(answer) {
          connection.query("SELECT * FROM products where stock_quantity <= 20", function(err, res) {
              if (err) throw err;
              console.table(res);
          runSearch();
        });
      });
  }

  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET from where = ?",
      {
        product_name: "camera",
        department_name: "photography",
        price: 99,
        stock_quantity: 30
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        // updateProduct();
        deleteProduct();
        runSearch();
        connection.end()
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

  function updateProduct() {
    console.log("Updating all products & quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
            product_name: "camera"
        },
        {
            department_name: "photography"
        },
        {
            price: 99
        },
        {
            stock_quantity: 30
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
        console.log(query[0]);
        viewProduct();
        runSearch();
      }
    );
    }

    function deleteProduct() {
        console.log("Deleting updated product...\n");
        connection.query(
          "DELETE FROM products WHERE ?",
          {
            product_name: "camera"
        },
        {
            department_name: "photography"
        },
        {
            price: 99
        },
        {
            stock_quantity: 30
        },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
            // readProducts();
          }
        );
      }
// need to change some code in Add Inventory.