import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="MovieList">
      {props.movies.map((el) => {
        return <MovieCard movies={el} />;
      })}
    </div>
  );
};

export default MovieList;
