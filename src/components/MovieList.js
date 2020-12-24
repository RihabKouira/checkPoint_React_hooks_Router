import React from "react";
import Description from "./Description";
import MovieCard from "./MovieCard";
import { Route } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="MovieList">
      {movies.map((el) => {
        return <MovieCard movies={el} />;
      })}
  
    </div>
  );
};

export default MovieList;
