import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetaills></MovieDetaills>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
