import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
        {movies.lenngth > 0 && movies.map((item) => <MovieCard></MovieCard>)}
      </div>
    </div>
  );
};

export default MoviePage;
