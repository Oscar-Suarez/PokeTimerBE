// Importar el modelo de Pokemons
const Pokemon = require ('../model/pokemonModel');

const getPokemon = async(req,res) =>{
    try {
        const idUsuario = req.query.idUsuario;
        const pokemons = await Pokemon.find({idUsuario: idUsuario});
        res.status(200).json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los Pokemon.');
    }
}

module.exports = getPokemon;


