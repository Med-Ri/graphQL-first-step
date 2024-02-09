import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      title
      year
    }
  }
`;

const QUERY_GET_MOVIE_BY_TITLE = gql`
  query GetMovieByTitle($title: String!) {
    movieByTitle(title: $title) {
      title
      year
    }
  }
`;

const MovieData = () => {
  const [movieSearch, setMovieSearch] = useState("");

  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  const [
    fetchMovieByTitle,
    { data: movieSearched, error: movieSearchedError },
  ] = useLazyQuery(QUERY_GET_MOVIE_BY_TITLE);

  if (loading) {
    return <h1> LOADING... </h1>;
  }

  if (error) {
    console.log("error", error);
  }

  if(movieSearchedError){
    console.log('movieSearchedError', movieSearchedError)
  }

  return (
    <div>
      <h1> List of Movies </h1>
      <div>
        <input
          type="text"
          placeholder="search your movie by title..."
          onChange={(e) => setMovieSearch(e.target.value)}
        />
        <button 
          onClick={()=> {
            fetchMovieByTitle({variables:{
              title: movieSearch
            }})
          }}
        > 
          Search 
        </button>

        {movieSearched && movieSearched?.movieByTitle && (
          <div className="border border-5 border-success m-3">
            <h1> Here is Your movie </h1>
            <h2> {movieSearched?.movieByTitle?.title} </h2>
            <h3> {movieSearched?.movieByTitle?.year} </h3>
          </div>
        )}
         {movieSearchedError && (
          <div className="border border-5 border-danger m-3">
            <h1> There was an error fetching the data </h1>
          </div>
        )}
      </div>

      {data &&
        data?.movies?.map((movie, i) => {
          return (
            <div key={i}>
              <hr></hr>
              <h1> {movie?.title} </h1>
              <h2> {movie?.year} </h2>

              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default MovieData;
