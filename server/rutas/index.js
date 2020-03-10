const express = require('express');


const app = express();


//difinicion de las rutas
app.use(require('./usuario'))
app.use(require('./login'))

module.exports = app;