//Database connection
const db = require('mysql2').createConnection({
  host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'ue21wepqsi75tcap',
  password: 'zn0vc78ss801cdql',
  database: 'q6ym1nfptvd3msuk'
})

db.query(`
    DROP DATABASE IF EXISTS q6ym1nfptvd3msuk;

    CREATE DATABASE q6ym1nfptvd3msuk;

    USE q6ym1nfptvd3msuk;

    CREATE TABLE burger(
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      eaten BOOLEAN NOT NULL DEFAULT 0
    );

    USE q6ym1nfptvd3msuk;

    INSERT INTO burger (name, eaten)
    VALUES ('American Burger', false),
          ('Cheese Burger', false),
          ('Veggie Burger', true),
          ('Grilled Chicken Burger', false),
          ('Crispy Chicken Burger', true);
    `)

module.exports = db