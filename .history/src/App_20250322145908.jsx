import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primaty">Home</span>
        <span>Movies</span>
      </header>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default App;
