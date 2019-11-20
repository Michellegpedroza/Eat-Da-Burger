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
}