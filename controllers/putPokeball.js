const UsuarioSchema = require('../model/userModel');

const putPokeball = async (req, res) => {
  try {
    const { id } = req.params; // ID del Pokémon a actualizar
    const { pokeball } = req.body; // Campos a actualizar

    const pokeballActualizadas = await UsuarioSchema.findByIdAndUpdate(
      id,
      { $set: { pokeball }  },
      { new: true }
    );

    if (!pokeballActualizadas) {
      return res.status(404).json({ mensaje: 'Perfil no encontrado' });
    }

    res.json(pokeballActualizadas);
  } catch (error) {
    console.error('Error al actualizar Pokeballs:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = putPokeball;