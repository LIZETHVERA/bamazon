var mysql = require("mysql");
var inquirer = require("inquirer");

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

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     afterConnection();
//   });

// function afterConnection() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
// }


connection.connect(function (err) {
  if (err) throw err;

  runUserBuy();
});


function runUserBuy() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the product ID you want to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
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
          if (isNaN(value) === false) {

            return true;

          }
          console.log("Please introduce a number");
          return false;

        }
      }
    ]).then(function (answer) {
      console.log(answer.id);
      console.log(answer.units)
      var query = "SELECT item_id, stock_quantity from products WHERE ?";
      connection.query(query, { item_id: answer.id }, function (err, res) {

        for (var i = 0; i < res.length; i++) {
        var selectedItem = res[i].item_id;
          console.log(selectedItem);
          console.log(res[i].stock_quantity);
          console.log((res[i].stock_quantity) - answer.units);
      
        }
      
      });

     
    });
}

function updateUnits () {
    var updateStock = "UPDATE products SET ? WHERE ?";
    connection.query(updateStock, [{ stock_quantity: result },{item_id = selectedItem}], function (err, res) {
    console.log(res.affectedRows + " products updated!\n");

});

}



