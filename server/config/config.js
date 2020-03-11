//=============================
//Puerto
//=============================
process.env.PORT = process.env.PORT || 3000;


//=============================
//Entorno 
//=============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=============================
//Vencimiento del Token
//=============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//=============================
//SEED de autenticacion
//=============================
process.env.SEED = 'este-es-el-seed-desarrollo' || process.env.SEED;




//=============================
//BASE DE DATOS
//=============================
let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://locahost:2071/cafe';
// } else {
urlDB = 'mongodb+srv://fvigo:7132NzxlbNPTR6sM@cluster0-2qfmf.mongodb.net/cafe'
    //}

process.env.URLDB = urlDB;


//=============================
//Google client ID
//=============================

process.env.CLIENT_ID = '1066576677869-88571eof9o7ha1oroet18hj8ivnqcu7j.apps.googleusercontent.com' || process.env.CLIENT_ID;