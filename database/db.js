const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/bd ';


const db = async () =>{
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
    })
    .then(() => console.log('Contectado a db'))
    .catch((error) => console.log(error));
}

module.exports = db;