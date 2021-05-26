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

    type Query {
        getUser(id: ID): Usuario
        getUsers: [Usuario]
    }
    type Mutation {
        registro(input: UsuarioInput): Usuario
    }
`

module.exports = typeDefs