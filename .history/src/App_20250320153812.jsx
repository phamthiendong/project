import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <div className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primaty">Home</span>
        <span>Movies</span>
      </div>
    </Fragment>
  );
};

export default App;
