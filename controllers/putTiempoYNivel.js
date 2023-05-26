const Pokemon = require('../model/pokemonModel');

const putTiempoYNivel = async (req, res) => {
  try {
    const { id } = req.params; // ID del Pokémon a actualizar
    const { nivel, tiempo } = req.body; // Campos a actualizar

    const pokemonActualizado = await Pokemon.findByIdAndUpdate(
      id,
      { $set: { nivel, tiempo }  },
      { new: true }
    );

    if (!pokemonActualizado) {
      return res.status(404).json({ mensaje: 'Pokémon no encontrado' });
    }

    res.json(pokemonActualizado);
  } catch (error) {
    console.error('Error al actualizar el Pokémon:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = putTiempoYNivel;

