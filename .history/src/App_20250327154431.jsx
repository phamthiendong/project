import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
// import MoviePage from "./pages/MoviePage";
// import Homepage from "./pages/Homepage";
// import MovieDetaills from "./pages/MovieDetaills";
//dynamic import
const Homepage = lazy(() => import("./pages/Homepage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetaills = lazy(() => import("./pages/MovieDetaills"));
const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </Fragment>
  );
};

export default App;
