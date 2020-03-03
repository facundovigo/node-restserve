//=============================
//Puerto
//=============================
process.env.PORT = process.env.PORT || 3000;


//=============================
//Entorno 
//=============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

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