const { ApolloServer } = require('apollo-server')
const typeDefs = require('../gql/schema')
const resolvers = require('../gql/resolvers')
require('dotenv').config({ path: ".env" })

function server(){
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers
    })
    serverApollo.listen({ port: process.env.Puerto || 3005 }).then( ({url}) =>{
        console.log(`Servidor en el puerto ${url}`)
    })
}

module.exports = server