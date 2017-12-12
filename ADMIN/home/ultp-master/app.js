'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api= require('./js/routes')
//const productCtrl = require('./controllers/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())//poder aceptar peticiones en formato json
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/login', (req, res)=>{
    res.render('login')
})

module.exports = app