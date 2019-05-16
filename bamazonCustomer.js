var mysql = require("mysql");
var inquirer = require("inquirer");
var empty = require('is-empty');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",


  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "catolica0225",
  database: "bamazonDB"
});



connection.connect(function (err) {
  if (err) throw err;

  start();
});

function start() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",

    choices: [
      "See the list of products",
      "Buy a product by ID",
      "exit"
    ]
  })
  .then(function(answer) {
    switch (answer.action) {
      case "See the list of products":
        displayProducts();
        break;

        case "Buy a product by ID":
        runUserBuy();
        break;

        case "exit":
        connection.end();
        break;
    }
  });
}

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price );
    }
    console.log("-----------------------------------");
  });
}



function runUserBuy() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the product ID you want to buy?",
        validate: function (value) {
          if (isNaN(value) === false && !value == "") {
            return true;
          }
          console.log("Please introduce a number");
          return false;
        }
      },
      {
        name: "units",
        type: "input",
        message: "How many units of the product would you like to buy?: ",
        validate: function (value) {
          if (isNaN(value) === false && !value == "") {
             return true;

          }
          console.log("Please introduce a number");
          return false;

        }
      }
    ]).then(function (answer) {
      // console.log(answer.id);
      // console.log(answer.units)

      var query = "SELECT item_id, product_name, department_name, price, stock_quantity from products WHERE ?";
      connection.query(query, { item_id: answer.id }, function (err, res) {

        for (var i = 0; i < res.length; i++) {
          // var selectedItem = res[i].item_id;
          //   console.log(selectedItem);
          var stockAvaible = (res[i].stock_quantity);
          console.log(stockAvaible);
          console.log("The product you have selected is: " + res[i].product_name + ". with the ID number: " + res[i].item_id);


          if (stockAvaible > 0) {

            var updateStock = connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: ((res[i].stock_quantity) - answer.units)
                },
                {
                  item_id: res[i].item_id
                }
              ],
              function (err, res) {
                console.log(res.affectedRows + " Your order was processed Thank you for buying with us!\n");

                // Call deleteProduct AFTER the UPDATE completes

              }
            );
            console.log("The unit price is: " + res[i].price);
            console.log("The total cost of your purchase is: " + (res[i].price * answer.units));


            // console.log("No se que es" + updateStock.sql);
          } else {
            console.log("Sorry, Insufficient quantity!")
          }
          // console.log((res[i].stock_quantity) - answer.units);
        }

      });


    });
}



