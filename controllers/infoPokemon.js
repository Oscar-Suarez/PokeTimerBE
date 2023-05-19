const Pokemon = require ('../model/pokemonModel');


const infoPokemon = async(req,res) =>{
    try {
        const nuevoPokemon = new Pokemon({
          name: req.body.name,
          pixSprite: req.body.pixSprite,
          fullSprite: req.body.fullSprite,
          tipos: req.body.tipos,
          nivel: req.body.nivel,
          tiempo: req.body.tiempo,
          evoluciones : req.body.evoluciones,
          segundaEvo : req.body.segundaEvo,
          dex: req.body.dex,
          idUsuario: req.body.idUsuario
        });
        const pokemonGuardado = await nuevoPokemon.save();
        res.status(201).json(pokemonGuardado);
      } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al guardar el Pokemon.');
      }
}

module.exports = infoPokemon;