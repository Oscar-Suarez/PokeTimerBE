const bcrypt = require('bcrypt');
const Usuario = require('../model/userModel');


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


const register = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    Usuario.findOne({ correo } || { nombre }).then((usuario) => {
        if (usuario) {
            return res.json({ mensaje: "Ya existe un usuario con ese correo y/o nombre de usuario." });
        } else if (!nombre || !correo || !contraseña) {
            return res.json({ mensaje: "Falta nombre de usuario, correo o contraseña" });
        } else {
            bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
                if (error) res.json({ error })
                else {
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contraseña: contraseñaHasheada,
                    });
                    nuevoUsuario.save()
                        .then((usuario) => {
                            const contenidoMail = {
                                from: 'Equipo técnico de PokeTimer',
                                to: correo,
                                subject: 'Registro exitoso',
                                text: `¡Hola ${nombre}!\n\nGracias por registrarte en el PokeTimer.\n\nTus datos de inicio de sesión son:\nNombre de usuario: ${nombre}\nContraseña: ${contraseña}. \n\nSi no te has registrado en el PokeTimer, por favor manda un correo a: PokeTimerOficial@gmail.com`,
                            };

                            transporter.sendMail(contenidoMail, (error, info) => {
                                if (error) {
                                    console.error('Error al enviar el correo electrónico:', error);
                                    console.log(error)
                                } else {
                                    console.log('Correo electrónico enviado:', info.response);
                                    console.log(info.response)
                                }
                            });
                            res.json({ mensaje: "Usuario creado correctamente", usuario })
                        })
                        .catch((error) => console.log(error));
                }
            })
        }
    })
}

module.exports = register;