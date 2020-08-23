import getMovies from './../API/getMovies.js';
import getMovieId from './../API/getMovieId.js';

export default async function renderCard(movieTitle) {
  const movies = await getMovies(movieTitle);

  if (movies.length > 0) {
    let movieObj = [];

    for (let i = 0; i < movies.length; i++) {
      movieObj.push(movies[i])
    }
  }
  
  let movieObj = [];


};