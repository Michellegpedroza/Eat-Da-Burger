//Require npm packages
const express = require('express')
const { join } = require('path')

//create the server
const app = express()

//Middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)

//listen to a port
app.listen(3000)