import React from "react";

const MovieCard = ({ item }) => {
  const { poster_path, release_date, title, vote_average } = item();

  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" text-xl font-bold mb-3">{title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button
        className="py-3 px-6 rounded-lg capitalize bg-primaty w-full
  "
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
