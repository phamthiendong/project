import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config";
import useDebounce from "../hooks/usedDebounce";
import ReactPaginate from "react-paginate";

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=37fa4c4e0c159453a9cf8da9617d490e&page=${nextPage}`
  );

  const filterDebounce = useDebounce(filter, 500);
  const { data, error, isLoading } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=37fa4c4e0c159453a9cf8da9617d490e&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=37fa4c4e0c159453a9cf8da9617d490e&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  useEffect(() => {
    if (data?.total_pages) {
      setPageCount(data.total_pages);
    }
  }, [data]);

  const handlePageClick = (event) => {
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
            onChange={(e) => setFilter(e.target.value)}
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

      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-4 mx-auto animate-spin"></div>
      )}

      {!loading && (
        <div className="grid grid-cols-4 gap-10">
          {movies.map((item) => (
            <MovieCard key={item.id} item={item} />
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
