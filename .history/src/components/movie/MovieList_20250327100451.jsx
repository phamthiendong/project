import React from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(type),
    fetcher
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
MovieList.protoType = {
  type: PropTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400 ">
      Something went wrong with this components
    </p>
  );
}
export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
