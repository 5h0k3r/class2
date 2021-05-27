const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: ".env" })

function CrearToken(usuario, llave, expiresIn){
    const { _id, rol, nombre, apellidos, correo } = usuario
    const misDatos = { _id, rol, nombre, apellidos, correo }
    return jwt.sign(misDatos, llave, {expiresIn})
}

async function registro(input){
    const newUsuario = input

    const { correo, pass } = newUsuario

    //Comprobamos si el correo existe
    const foundCorreo = await Usuario.findOne({ correo })
    if(foundCorreo) throw new Error("El correo ya existe")

    //Encriptamos contraseña
    const salt = await bcryptjs.genSaltSync(12)
    newUsuario.pass = await bcryptjs.hash(pass, salt)

    try {
        const user = new Usuario(newUsuario)
        await user.save()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function login(input){
    const { correo, pass } = input

    //Varificar correo
    const foundCorreo = await Usuario.findOne({ correo: correo})
    if(!foundCorreo) throw new Error("El correo no existe")

    //Verificar contraseña
    const PassCorrect = await bcryptjs.compare(pass, foundCorreo.pass)
    if(!PassCorrect) throw new Error("La contraseña es incorrecta")

    return{
        token: CrearToken(foundCorreo, process.env.Llave_Secreta, "400h")
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
    login,
    getUser,
    getUsers
}