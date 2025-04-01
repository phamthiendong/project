import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primaty">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/au_marvel_avengersendgame_hero_m_f8ba68d1.jpeg?region=0,133,750,422"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5 ">Avengers: Endgame</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
