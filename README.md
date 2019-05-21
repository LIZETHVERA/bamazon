# BAMAZON: 

The app will take in orders from customers and deplete stock from the store's inventory.

## Overview:
This is an app with Customer View: 

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



