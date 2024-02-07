const { UserList, movieList } = require("../FakeData");
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
    //resolver to get movies list
    movies: ()=>{
      return movieList
    },
    //resolver to get movies by title
    movieByTitle: (parent , args) => {
      const title = args?.title
      const movie = _.find(movieList, {title})
      return movie
    }
   
  },

  User: {
    favMovies: () => {
      return _.filter(movieList, (movie)=> movie.year < 2000 )
    }
  }



};

module.exports = { resolvers };
