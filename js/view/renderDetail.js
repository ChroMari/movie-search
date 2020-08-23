

export default function renderDetail () {
  const movieField = document.querySelector('.movie');

  movieField.addEventListener('click', detailMovie);
}

function detailMovie (e) {
  if (e.target.parentElement.className == 'card') {
    const elem = e.target.parentElement;
    const movieTitle = elem.querySelector('.info__title').textContent; //получаю название
    let resultMovie = getMovieInfo(movieTitle);
    console.log(resultMovie);

  }
}

function getMovieInfo (title) {
  title = title.split(' ').join('+');
  
  const KEY = 'cc1ddbdd';
  const URL = `http://www.omdbapi.com/?t=${title}&apikey=${KEY}`;

  const dt = fetch(URL)
                .then(res => res.json())
                .then((data) => {
                  renderDetailCard(data)
                });
  return;
}

function renderDetailCard (mov) {
  console.log(mov);
  let detailField = document.querySelector('.movie');
  let cardInfo = document.querySelector('.detail');
  if (cardInfo !== null) cardInfo.remove();
  let cardDetail = `
    <div class='detail'>
    <img class="detail__img" src=${mov.Poster}>
      <div class="detail-info">
        <h3 class="detail-info__title">${mov.Title}</h3>
        <p class="detail-info__year">Год выпуска: ${mov.Year}</p>
        <p class="detail-info__raiting">Рейтинг: ${mov.imdbRating}/10</p>
        <p class="detail-info__plot">${mov.Plot}</p>
        <a class="btn" href='https://www.imdb.com/title/${mov.imdbID}/' class="info__title"  target="_blank">Open</a>
      </div>
    </div>
  `;
  detailField.insertAdjacentHTML('afterend', cardDetail); 
}