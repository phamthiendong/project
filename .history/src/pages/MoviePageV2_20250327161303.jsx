import React, { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import useDebounce from "../hooks/usedDebounce";
import { fetcher, tmdbAPI } from "../config";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import Button from "../components/button/Button";

const itemsPerPage = 20;

const MoviePageV2 = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);

  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      filterDebounce
        ? tmdbAPI.getMovieSearch(filterDebounce, index + 1)
        : tmdbAPI.getMovieList("popular", index + 1),
    fetcher
  );

  const movies = data ? data.flatMap((page) => page.results) : [];
  const loading = !data && !error;
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);

  return (
    <div className="py-10 page-container">
      {/* Search Input */}
      <div className="flex mb-10">
        <input
          type="text"
          className="flex-1 p-4 bg-slate-800 text-white outline-none"
          placeholder="Type here to search..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {/* Movie List */}
      {loading ? (
        <div className="grid grid-cols-4 gap-10">
          {Array.from({ length: itemsPerPage }, (_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {movies.length > 0 ? (
            movies.map((item) => <MovieCard key={item.id} item={item} />)
          ) : (
            <p className="text-center col-span-4">No movies found.</p>
          )}
        </div>
      )}

      {/* Load More Button */}
      <div className="mt-10 text-center">
        <Button
          onClick={() => !isReachingEnd && setSize(size + 1)}
          disabled={isReachingEnd}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default MoviePageV2;
