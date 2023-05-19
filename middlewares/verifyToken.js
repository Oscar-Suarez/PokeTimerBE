const jwt = require('jsonwebtoken')
const TOKEN_IS = process.env.TOKEN_IS;

const verifyToken = async(req,res,next) =>{
    const token = req.headers['token']
    if(token){
        jwt.verify(token,  TOKEN_IS, (error, data) =>{
            if(error) return res.status(400).json({mensaje: "Token no válido."});
            else{
                req.user = data
                next()
            };
        } )
    } else{
        res.status(400).json({mensaje: "Debes enviar un token"})
    }
}

module.exports = verifyToken