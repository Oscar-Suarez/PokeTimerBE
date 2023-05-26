const bcrypt = require('bcrypt');
const Usuario = require('../model/userModel');
const jwt = require('jsonwebtoken');
const TOKEN_IS = process.env.TOKEN_IS;
const nodemailer = require('nodemailer');
const Pas = process.env.Pas;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "PokeTimerOficial@gmail.com",
        pass: Pas,
    },
});

const login = async (req, res) => {
    const { correo, nombre, contraseña } = req.body;

    Usuario.findOne({ correo } || { nombre }).then((usuario) => {
        if (!usuario) {
            return res.json({ mensaje: "Usuario no encontrado." });
        }

        bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
            if (esCorrecta) {
                const { id, nombre } = usuario;
                const data = {
                    id,
                    nombre,
                };
                const token = jwt.sign(data, TOKEN_IS, {
                    expiresIn: 86400,
                });
                res.json({
                    mensaje: 'Usuario logeado correctamente',
                    usuario: { id, nombre, token },
                });
            } else {
                return res.json({ mensaje: 'Contraseña incorrecta.' });
            }
        });
    });
};

module.exports = login;
