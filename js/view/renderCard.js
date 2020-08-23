import getMovies from './../API/getMovies.js';
import getMovieId from './../API/getMovieId.js';

export default async function renderCard(movieTitle) {
  const movies = await getMovies(movieTitle);

  if (movies.length > 0) {

    let resultMovie = await Promise.all(
      movies.map(async (movie) => {
        let detail = await getMovieId(movie.imdbID);
        movie.Detail = detail;
        return movie;
      })
    )

   render(resultMovie);

   return resultMovie;
  }
};

function render (movies) {
  
  const movieElement = document.querySelector('.movie');
  movieElement.textContent = '';

  let movieArr = [];

  for (let i = 0; i < movies.length; i++) {
    movieArr.push(`
    <div class="card">
    <img src=${movies[i].Poster}>
    <div class="card__info">
      <a href='https://www.imdb.com/title/${movies[i].imdbID}/' class="info__title"  target="_blank">${movies[i].Title}</a>
      <p class="info__rating">Рейтинг: ${movies[i].Detail.imdbRating}/10</p>
      <p class="info__year">Год выпуска: ${movies[i].Year}</p>
    </div>
    </div>
    `);
  }

  movieElement.insertAdjacentHTML('afterbegin', movieArr.join(' ')); 
}