const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const { VerificaToken, VerificaAdmin_role } = require('../middlewares/autenticacion')
    //const { execSync } = require('child_process');


app.get('/usuario', VerificaToken, (req, res) => {

    // return res.json({
    //         usuario: req.usuario,
    //         nombre: req.usuario.nombre,
    //         email: req.usuario.email,
    //     })
    // res.json('Get Prueba');

    // {estado: true}
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
            });
        })
});

app.post('/usuario', [VerificaToken, VerificaAdmin_role], function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

app.put('/usuario:id', [VerificaToken, VerificaAdmin_role], function(req, res) {

    let id = req.params.id;
    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.delete('/usuario/:id', [VerificaToken, VerificaAdmin_role], function(req, res) {

    let id = req.params.id;

    let cambiaEstado = {
        estado: false
    }

    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (usuarioBorrado == null) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'usuario no encontrado'
                }
            });

        }
        res.json({
            ok: true,
            usuario: usuarioBorrado
        })
    });



});


module.exports = app;

//atlas
//user:fvigo
//pass:7132NzxlbNPTR6sM
// MongoDB URL:  mongodb+srv://fvigo:7132NzxlbNPTR6sM@cluster0-2qfmf.mongodb.net/cafe