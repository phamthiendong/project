import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primaty">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[300px] bg-white "></section>
    </Fragment>
  );
};

export default App;
