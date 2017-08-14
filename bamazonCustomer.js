//Then create a Node application called `bamazonCustomer.js`. 
var mysql = require("mysql");
var inquirer = require("inquirer");
//establish connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "1001",
	database: "bamazon_db"
})
//conect to mysql server and sql database
connection.connect(function(err){
	if(err) throw err;//return console.log(err);
	console.log("Connected as id " + connection.threadId)
//need connection to be inside callback function!
displayTable();//display all of the items available for sale.
//connection.end();
}); 
//1st ask them the ID of the product they would like to buy
function start() {
	connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
	inquirer.prompt([
	{
		name: "choiceID",
		type: "rawlist",
		choices: function(){
			var choiceArray = [];
			for (var i = 0; i < res.length; i++) {
				choiceArray.push(res[i].product_name);
			}
			return choiceArray;
		},
		message: "Please choose the ID number of the product you would like to buy"
	},
	//second message should ask how many units of the product they would like to buy.
	{
		name: "stock_purchase" ,
		type: "input",
		message: "How many would you like to purchase?"
	}
	
	]).then(function(answer){
		var chosenItem;//info for chosen item
		for (var i = 0; i < res.length; i++) {
			if (res[i].product_name === answer.choice){
				chosenItem = res[i];
			}
		}
		if (chosenItem.stock_quantity > parseInt(answer.stock_purchase)) {
			chosenItem.stock_quantity - answer.stock_purchase = answer.stock_purchase;
			//update value of stock_quantity
			connection.query(
				"UPDATE products SET ? WHERE ?",
				[
				{ 
				 stock_quantity: answer.stock_purchase	
				},
				{
					id: chosenItem.id
				}
				],
					function(error) {
						if (error) throw err;
						console.log("Thank you for shopping with us!");
						start();
					}
				)
		}
		else {
			console.log("We do not have sufficient stock. Please try again");
			start();
		}
	});
});
}
//set data from table into variable to be used elsewhere
var dataResult; 
//start || display function
function displayTable() {
	connection.query("SELECT * FROM products",function(err, res){
		if (err) throw err;
		dataResult = res;
		res.forEach(function(row){//passing argument 'row' simplifies array
			console.log(row.id + " | " + row.product_name + " | " + row.price + " | " + row.stock_quantity + " | " + row.department_name);
    })
		//console.log(res);
	});
}

//function stockUpdate(){}