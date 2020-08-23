import getTranslet from './API/getTranslet.js';
import renderCard from './view/renderCard.js';

const formSearch = document.getElementById('search');
formSearch.addEventListener('submit', searchTitleMovie);

function searchTitleMovie (e) {
  e.preventDefault();

  const formTitle = document.querySelector('.search__text').value;
  const MoviesTitle = formTitle;
  if(/[а-я]/i.test(formTitle)) {
    MoviesTitle = getTranslet(formTitle);
  } 

  renderCard(MoviesTitle);
}



