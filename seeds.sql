DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(45),
  over_head_costs DECIMAL(10,2),
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("cheetos",10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("advil", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("matte_lipstick", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("tide", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("hairbrush", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("hairband", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("bagpack", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("jackets", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("flowers", 10000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("phone", 10000);

select * from  departments   