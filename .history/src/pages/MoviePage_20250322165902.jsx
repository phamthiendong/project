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
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            placeholder="Type here to search ..."
          />
        </div>
        <button >import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  const movies = data?.results ?? [];

  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 ? (
          movies.map((item) => <MovieCard key={item.id} item={item} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
</button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
