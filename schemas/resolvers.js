const { UserList } = require("../FakeData");
const _ = require ('lodash')

const resolvers = {
  Query: {
    //resolver function that return all users
    users() {
      return UserList;
    },
    //resolver to get user by id
    user: (parent , args) => {
      const id = args?.id
      const user = _.find(UserList,{id: Number(id)})
      return user
    },
  },
};

module.exports = { resolvers };
