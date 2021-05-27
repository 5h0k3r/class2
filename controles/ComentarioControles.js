const Comentario = require('../models/Comentario')
const mongoose = require('mongoose')

async function setComentario(input, ctx){
    try {
        const { _id } = ctx.usuario
        const newComentario = input
        newComentario.idUsuario = _id
        const comentario = new Comentario(newComentario)
        await comentario.save()
        return comentario
    } catch (error) {
        console.log(error)
    }
}

async function getComentarios(){
    try {
        const comentarios = Comentario.find().populate("idUsuario")
        return comentarios
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    setComentario,
    getComentarios
}