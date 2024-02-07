const {UserList} = require('../FakeData')

const resolvers = {
    Query : {
        //resolver function that return all users 
        users(){
            return UserList
        }
    }
}

module.exports = {resolvers}