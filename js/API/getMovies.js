export default async function getMovies (title) {
  const KEY = 'cc1ddbdd';
  const page = 2;
  const URL = `https://www.omdbapi.com/?s=${title}&apikey=${KEY}`;

  const err = document.querySelector('.error');
  err.textContent = '';
  
  const data = await fetch(URL).then(res => res.json());

  if (data.Error === undefined) return data.Search;
  else {
    err.textContent = `No results for ${title}`;
    return;
  }

}