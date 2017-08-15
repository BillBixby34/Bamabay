-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;

CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id integer(11) auto_increment not null,
  -- Makes a string column called "name" which cannot contain null --
  product_name varchar(100) not null,
 
 price decimal(10,2) not null,

stock_quantity integer(20) null,
 -- stock_avail BOOLEAN DEFAULT true, ---
 department_name varchar(100) not null,
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Cheese Head", 14.99, 100, "novelty");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("milk", 5.79, 1000, "food");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("kitchen sink", 249.99, 100, "home goods");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("hummus", 3.35, 1000, "food");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("showerhead", 144.95, 200, "home goods");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Max Payne 3", 19.99, 1100, "electronics");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("lisenced cup", 1, 10000, "home goods");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("kona", 34.75, 20000, "food");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("3D glasses", 30, 40, "electronics");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("gyroscope", 8.23, 900, "novelty");