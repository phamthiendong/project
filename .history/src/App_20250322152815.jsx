import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/css";

const App = () => {
  return (
    <Fragment>
      <Banner></Banner>
    </Fragment>
  );
};

export default App;
