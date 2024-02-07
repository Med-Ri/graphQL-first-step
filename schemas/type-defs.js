const {gql} = require ('apollo-server')


//1 - create query (users) this query we gonna retrieve the list of users instance from type User

const typeDefs = gql`
    
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: String!
    }
    
    type Query {
        users: [User!]!
    }
`


module.exports = {typeDefs}