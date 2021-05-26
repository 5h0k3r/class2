const UsuarioControles = require('../controles/UsuarioControles')

const resolvers = {
    Query: {
        getUser: (_, { id }) => UsuarioControles.getUser(id),
        getUsers: (_, {}) => UsuarioControles.getUsers()
    },
    Mutation: {
        registro: (_, { input }) => UsuarioControles.registro(input)
    }
}

module.exports = resolvers