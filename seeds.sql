DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(45),
  over_head_costs DECIMAL(10,2),
  product_sales, DECIMAL(10,2),
  total_profit DECIMAL(10,2),
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("cheetos", "snacks", 5, 50);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("advil", "medicine", 18, 25);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("matte_lipstick", "beauty", 15, 12);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("tide", "cleaning", 25, 40);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("hairbrush", "beauty", 10, 30);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("tihairbandde", "beauty", 25, 20);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("bagpack", "school", 25, 50);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("jackets", "clothing", 100, 25);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("flowers", "nature", 15, 50);

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ("phone", "electronics", 1000, 20);

select * from  departments 