export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const apiKey = "37fa4c4e0c159453a9cf8da9617d490e";

const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/movie/${type}?api_key=${apiKey}&page=${page}`,

  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,

  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
