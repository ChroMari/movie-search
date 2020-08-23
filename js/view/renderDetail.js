

export default function renderDetail () {
  const movieField = document.querySelector('.movie');

  movieField.addEventListener('click', detailMovie);
}

function detailMovie (e) {
  if (e.target.parentElement.className == 'card') {
    const elem = e.target.parentElement;
    const movieTitle = elem.querySelector('.card__title').textContent; //получаю название
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
  let detailField = document.querySelector('.detail');
  detailField.textContent = '';
  let cardDetail = `
    <div>
    <div class="detail__close">x</div>
    <img src=${mov.Poster}>
      <div>
        <h3>${mov.Title}</h3>
        <p>${mov.Year}</p>
        <p>${mov.Plot}</p>
        <p>${mov.imdbRating}</p>
      </div>
    </div>
  `;
  detailField.insertAdjacentHTML('afterbegin', cardDetail); 
}