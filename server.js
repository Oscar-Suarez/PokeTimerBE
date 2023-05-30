require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require ('./database/db') 
const PORT = process.env.PORT || 3030;     



const controllers = require('./controllers');
const verifyToken = require('./middlewares/verifyToken');


const app = express();

app.use(cors({
    origin: '*'
  }));
  
app.use(express.json());

app.get('/user',verifyToken, controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);
app.post('/infoPokemon', controllers.infoPokemon);
app.get('/getPokemon', controllers.getPokemon);
app.put('/putTiempoYNivel/:id', controllers.putTiempoYNivel);
app.put('/putPokeball/:id', controllers.putPokeball);




app.listen (PORT, () =>{
    console.log(`Servidor ${PORT} funcionando.`)
    db();
})

