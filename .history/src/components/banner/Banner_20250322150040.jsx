import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=37fa4c4e0c159453a9cf8da9617d490e`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log(movies);

  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>

        <img
          src="https://lumiere-a.akamaihd.net/v1/images/au_marvel_avengersendgame_hero_m_f8ba68d1.jpeg?region=0,133,750,422"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5 ">Avengers: Endgame</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-primaty text-white font-medium">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
