export default async function getMovies (ID) {
  const KEY = 'cc1ddbdd';
  const URL = `https://www.omdbapi.com/?i=${ID}&apikey=${KEY}`;

  const data = await fetch(URL).then(res => res.json());

  return {
    imdbRating : data.imdbRating,
    Rated : data.Rated, 
    Plot : data.Plot,
    Genre : data.Genre
  };
  
}