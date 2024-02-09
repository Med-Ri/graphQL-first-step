import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      title
      year
    }
  }
`;

const MovieData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);

  if (loading) {
    return <h1> LOADING... </h1>;
  }

  if (error) {
    console.log("error", error);
  }

  console.log("data", data);

  return (
    <div>
      <h1> List of Movies </h1>
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
