import React from "react";
import MovieCard from "./MovieCard";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  const movies = data?.results || [];
  console.log(data);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
