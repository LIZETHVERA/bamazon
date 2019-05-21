# BAMAZON: 

The app will take in orders from customers and deplete stock from the store's inventory.

## Overview:
This is an app with Customer View: 

1. With the command node `bamazonCustomer.js` we can acces to the principal menu:

 * See the list of products:  is avaiable to show the list of  products.
 
 * Buy a product by ID: Open with two questions
   1. What is the product ID you want to buy? (The user have to enter the number ID). 
   2. How many units of the product would you like to buy?: (The user have to enter the number of the quantity). 
 
 * exit: To leave the app. 

2. Case escenario: 
2.1. Insufficient quantity
2.2. The product you have selected is avaiable in stock: 

* The app shows:  
 * The product
 * The unit price
 * The total cost of the purchase
 
* This is how the app works:

## Gif embeded video:

![Watch the video](/BamazonNodeApp.gif)

## YouTube video:
[![Node](http://img.youtube.com/vi/dY-3UXKIiTc/0.jpg)](https://www.youtube.com/watch?v=dY-3UXKIiTc)

### App Setup

### DB Setup:

 MySQL Database called `bamazon`.
 
 The products table have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)


### Config Setup

`var mysql = require("mysql")`
`var inquirer = require("inquirer")`
`var Table = require('cli-table3'); To show the products table`.



