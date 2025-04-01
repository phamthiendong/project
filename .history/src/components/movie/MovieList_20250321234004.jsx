import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "swiper/css";
//https://api.themoviedb.org/3/movie/now_playing?api_key=37fa4c4e0c159453a9cf8da9617d490e
//`https://api.themoviedb.org/3/search/movie?api_key=37fa4c4e0c159453a9cf8da9617d490e&query=${queryDebounce}`
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
