const { UserList, movieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    //resolver function that return all users
    users() {
      return UserList;
    },
    //resolver to get user by id
    user: (parent, args) => {
      const id = args?.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    //resolver to get movies list
    movies: () => {
      return movieList;
    },
    //resolver to get movies by title
    movieByTitle: (parent, args) => {
      const title = args?.title;
      const movie = _.find(movieList, { title });
      return movie;
    },
  },

  User: {
    favMovies: (parent, args) => {
      const moviesIds = parent?.favMovies?.map((movie) => movie.id);
      if (!moviesIds || !Array.isArray(moviesIds)) {
        return [];
      }
      return _.filter(movieList, (movie) => moviesIds.includes(movie.id));
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      //incrementId
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUserName: (parent, args) => {
      const { id, newUserName } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id == id) {
          user.userName = newUserName;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id == Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
