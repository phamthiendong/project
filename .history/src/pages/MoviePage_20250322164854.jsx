import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="py-10">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
