import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  return (
    <div className="py-10">
      <MovieList type="pouplar"></MovieList>
    </div>
  );
};

export default MoviePage;
