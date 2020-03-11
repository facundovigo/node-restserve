require('./config/config');

const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public

app.use(express.static(path.resolve(__dirname, '../public')));

// app.use(require('./rutas/usuario'))
// app.use(require('./rutas/login'))

//configuracion global de rutas
app.use(require('./rutas/index'))

//conexion a la bbdd

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {

    if (err) throw err;

    console.log('Base de datos ONLINE')
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});