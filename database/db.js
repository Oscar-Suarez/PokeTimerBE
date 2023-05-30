const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/bd';
const RENDER_URL = 'https://poketimer-back.onrender.com';

const db = async () => {
    let connectionString = MONGO_URL;


    if (process.env.RENDER) {
        connectionString = RENDER_URL;
    }

    await mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: true,
        })
        .then(() => console.log('Conectado a la base de datos'))
        .catch((error) => console.log(error));
};

module.exports = db;
