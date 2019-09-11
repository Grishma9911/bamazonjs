DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45),
  department_name VARCHAR(45),
  price DECIMAL(10,2),
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name,  price, stock_quantity)
VALUES ("cheetos", "snacks", 5, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("advil", "medicine", 18, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("matte_lipstick", "beauty", 15, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tide", "cleaning", 25, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hairbrush", "beauty", 10, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tihairbandde", "beauty", 25, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bagpack", "school", 25, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jackets", "clothing", 100, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flowers", "nature", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone", "electronics", 1000, 20);

select from * products 