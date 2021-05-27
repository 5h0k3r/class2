const UsuarioControles = require('../controles/UsuarioControles')
const ComentarioControles = require('../controles/ComentarioControles')

const resolvers = {
    Query: {
        getUser: (_, { id }) => UsuarioControles.getUser(id),
        getUsers: (_, {}) => UsuarioControles.getUsers(),
        getComentarios: (_, {}) => ComentarioControles.getComentarios()
    },
    Mutation: {
        registro: (_, { input }) => UsuarioControles.registro(input),
        login: (_, { input }) => UsuarioControles.login(input),
        setComentario: (_, { input }, ctx) => ComentarioControles.setComentario(input, ctx)
    }
}

module.exports = resolvers