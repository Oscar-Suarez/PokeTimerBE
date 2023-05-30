const UsuarioSchema = require('../model/userModel');

const putPokeballyMedallas = async (req, res) => {
  try {
    const { id } = req.params; // ID del Pokémon a actualizar
    const { pokeball, medallas } = req.body; // Campos a actualizar

    const DatosActualizados = await UsuarioSchema.findByIdAndUpdate(
      id,
      { $set: { pokeball, medallas }  }, 
      { new: true }
    );

    if (!DatosActualizados) {
      return res.status(404).json({ mensaje: 'Perfil no encontrado' });
    }

    res.json(DatosActualizados);
  } catch (error) {
    console.error('Error al actualizar Pokeballs:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = putPokeballyMedallas;