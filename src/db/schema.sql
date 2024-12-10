\c postgres;

DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

\c business_db;


CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    dept_id INT NOT NULL,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    dept_id INT NOT NULL,
    role_id INT NOT NULL,
    manager_id INTEGER NULL,
    name VARCHAR(255) NOT NULL,

    FOREIGN KEY (dept_id) 
    REFERENCES departments(id),

    FOREIGN KEY (role_id) 
    REFERENCES roles(id),

    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);

