const { gql } = require('apollo-server')

const typeDefs = gql`
    #Crear tablas
    type Usuario {
        _id: ID
        rol: RolUsuario
        nombre: String
        apellidos: String
        correo: String
        pass: String
        createAt: String
    }
    type Token {
        token: String
    }
    type Comentario {
        _id: ID
        idUsuario: Usuario
        comentario: String
        createAt: String
    }

    #Creacion de campos personalizados
    enum RolUsuario {
        admin
        usuario
    }

    #Creacion de los input
    input UsuarioInput {
        rol: RolUsuario!
        nombre: String!
        apellidos: String!
        correo: String!
        pass: String!
    }
    input LoginInput {
        correo: String!
        pass: String!
    }
    input ComentarioInput {
        comentario: String
    }

    type Query {
        getUser(id: ID): Usuario
        getUsers: [Usuario]
        getComentarios: [Comentario]
        getComentarioUsuario: [Comentario]
        getComentario(id: ID): Comentario
    }
    type Mutation {
        registro(input: UsuarioInput): Usuario
        login(input: LoginInput): Token

        setComentario(input: ComentarioInput): Comentario
    }
`

module.exports = typeDefs