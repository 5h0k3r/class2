const Usuario = require('../models/Usuario')

async function registro(input){
    const newUsuario = input
    try {
        const user = new Usuario(newUsuario)
        await user.save()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function getUser(id){
    try {
        const user = await Usuario.findById(id)
        return user
    } catch (error) {
        console.log(error)
    }
}

async function getUsers(){
    try {
        const users = await Usuario.find()
        return users
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registro,
    getUser,
    getUsers
}