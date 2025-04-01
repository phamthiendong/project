export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const apiKey = "37fa4c4e0c159453a9cf8da9617d490e";

const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieCredits: (movieId) =>
    `${tmdbEndpoint}/${movieId}${movieId}/credits?api_key=${apiKey}`,
};
