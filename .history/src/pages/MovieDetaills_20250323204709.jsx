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
  
    if (error) return <div>Lỗi tải dữ liệu!</div>;
    if (!data) return <div>Đang tải...</div>;
  
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
      </div>
};

export default MovieDetaills;
