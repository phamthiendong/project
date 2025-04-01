import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
//https://api.themoviedb.org/3/movie/now_playing?api_key=37fa4c4e0c159453a9cf8da9617d490e
//`https://api.themoviedb.org/3/search/movie?api_key=37fa4c4e0c159453a9cf8da9617d490e&query=${queryDebounce}`
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
const MovieList = ({ type = "now_playing" }) => {
  const { data, error, isLoading } = useSWR(tmdbAPI.getMovieList(type), fetcher)
  );
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
