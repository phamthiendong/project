import React from "react";
import { useNavigate } from "react-router-dom";
import Buttonfrom "";
const MovieCard = ({ item }) => {
  if (!item) return null;
  const { poster_path, release_date, title, vote_average, id } = item;
  const navigate = useNavigate();

  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button>watch now 2</Button>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-primaty w-full mt-auto"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
