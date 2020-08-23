import getMovies from './../API/getMovies.js';
import getMovieId from './../API/getMovieId.js';

export default async function renderCard(movieTitle) {
  const movies = await getMovies(movieTitle);

  movies.map(async (movie) => {
    let detail = await getMovieId(movie.imdbID);
    return movie['detail'] = detail;
  });

  

  


};