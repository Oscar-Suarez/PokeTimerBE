const { model, Schema } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    pokeball: {type: Number, default:0 }
});


module.exports = model("Usuario", UsuarioSchema);
