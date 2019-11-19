DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
   id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  eaten BOOLEAN NOT NULL DEFAULT 0
)
