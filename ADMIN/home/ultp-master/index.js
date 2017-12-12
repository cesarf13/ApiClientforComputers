'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const config = require('./config')
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`);
    }
    console.log('Conexion a la BD establecida...')

    app.listen(config.port, () => {
        console.log(`API REST corriendo en localhost:${config.port}`)
    })
})
