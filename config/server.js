const { ApolloServer } = require('apollo-server')
const typeDefs = require('../gql/schema')
const resolvers = require('../gql/resolvers')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: ".env" })

function server(){
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) =>{
            const token = req.headers.authorization;
            if(token){
                try {
                    const usuario = jwt.verify(
                        token.replace("Bearer ", ""),
                        process.env.Llave_Secreta
                    )
                    return{
                        usuario
                    }
                } catch (error) {
                    console.log("### ERROR ###")
                    console.log(error)
                    throw new Error("El token es invalido")
                }
            }
        }
    })
    serverApollo.listen({ port: process.env.Puerto || 3005 }).then( ({url}) =>{
        console.log(`Servidor en el puerto ${url}`)
    })
}

module.exports = server