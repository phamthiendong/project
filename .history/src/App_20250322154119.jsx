import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
