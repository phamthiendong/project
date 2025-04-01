import React from "react";
import MovieCard from "./MovieCard";
import "swiper/css";
//https://api.themoviedb.org/3/movie/now_playing?api_key=
import { SwiperSlide, Swiper } from "swiper/react";
const MovieList = () => {
  const { data, error, isLoading } = useSWR(`/api/user/${userId}`, fetcher);
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
