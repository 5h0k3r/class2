const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    rol: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellidos: {
        type: String,
        require: true,
        trim: true
    },
    correo: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    pass: {
        type: String,
        require: true,
        trim: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)