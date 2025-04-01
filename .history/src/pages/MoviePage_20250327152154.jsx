import React, { useEffect, useState } from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import useDebounce from "../hooks/usedDebounce";
import ReactPaginate from "react-paginate";
import {v4} from "uuid"
const itemsPerPage = 20;

const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error, isLoading } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  // const { page, total_pages } = data;
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primaty text-white">
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
      {/* {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primaty border-t-4 mx-auto animate-spin"></div>
      )} */}

      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(20).fill(0).map(() => {
            <MovieCardSkeleton key={}></MovieCardSkeleton>;
          })}
        </div>
      )}
      {!loading && (
        <div className="grid grid-cols-4 gap-10">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      )}
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
