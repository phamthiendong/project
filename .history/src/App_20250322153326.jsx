import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
