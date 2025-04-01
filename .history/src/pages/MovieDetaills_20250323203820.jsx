import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
const MovieDetaills = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `
https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  return <div></div>;
};

export default MovieDetaills;
