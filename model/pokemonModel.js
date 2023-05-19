const { model, Schema } = require('mongoose');


const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    pixSprite: {
        type: String,
        required: true
    },
    fullSprite: {
        type: String,
        required: true
    },
    tipos: {
        type: Schema.Types.Mixed,
        required: true
    },
    nivel: {
        type: Number,
        default: 0
    },
    tiempo: {
        type: Number,
        default: 0
    },
    evoluciones: {
        type: Schema.Types.Mixed,
        default: null
    },
    segundaEvo: {
        type: Schema.Types.Mixed,
        default: null
    },
    dex:{
        type: Number,
    },
    idUsuario:{
        type: String,
        required: true
    }

});
module.exports = model("Pokemon", pokemonSchema);