const mongoose = require('mongoose')

const ComentarioSchema = mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Usuario"
    },
    comentario: {
        type: String,
        require: true,
        trim: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Comentario", ComentarioSchema)