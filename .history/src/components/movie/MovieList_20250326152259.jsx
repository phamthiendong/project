import React from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];

  if (error) return <p className="text-red-500">Lỗi khi tải phim!</p>;
  if (loading) return <p className="text-gray-500">Đang tải...</p>;

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={movies.length < 5 ? movies.length : 5}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
