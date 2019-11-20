const db = require(`../config`)

module.exports = {
  getBurgers(cb) {
    db.query('SELECT * FROM burger', (e, burgers) => {
      if (e) {
        console.log(e)
      }
      cb(burgers)
    })
  },

  addBurger(name, eaten, cb) {
    db.query(`INSERT INTO burger (name, eaten) VALUES ("${name}", ${eaten})`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },

  eatBurger(id, cb) {
    db.query(`UPDATE burger SET eaten = true WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  },

  removeBurger(id, cb) {
    db.query(`DELETE FROM burger WHERE id = ${id}`, e => {
      if (e) {
        console.log(e)
      }
      cb()
    })
  }
  init() {
    db.query(`
    DROP DATABASE IF EXISTS burgers_db;

    CREATE DATABASE burgers_db;

    USE burgers_db;

    CREATE TABLE burger(
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      eaten BOOLEAN NOT NULL DEFAULT 0
    );

    USE burgers_db;

    INSERT INTO burger (name, eaten)
    VALUES ('American Burger', false),
          ('Cheese Burger', false),
          ('Veggie Burger', true),
          ('Grilled Chicken Burger', false),
          ('Crispy Chicken Burger', true);
    `)
  }
}