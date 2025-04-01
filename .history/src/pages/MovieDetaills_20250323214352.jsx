import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
const MovieDetaills = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );

  return (
    <>
      <div
        className="w-full h-screen bg-co"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetaills;
