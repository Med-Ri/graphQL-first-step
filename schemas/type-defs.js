const {gql} = require ('apollo-server')


//1 - create query (users) this query we gonna retrieve the list of users instance from type User

const typeDefs = gql`
    
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    enum Nationality {
        AMERICAN
        BRITISH
        EGYPTIAN
        SPANISH
        CHINESE
        CANADIAN
        MEXICAN
    }


`


module.exports = {typeDefs}