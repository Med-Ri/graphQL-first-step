const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schemas/type-defs')
const {resolvers} = require('./schemas/resolvers')


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=> {
    console.log(`Your Server is Running At ${url} !!`)
})