import getTranslet from './API/getTranslet.js';

const formSearch = document.getElementById('search');
formSearch.addEventListener('submit', searchTitleMovie);

function searchTitleMovie (e) {
  e.preventDefault();

  const formTitle = document.querySelector('.search__text').value;
  const MoviesTitle = formTitle;
  if(/[а-я]/i.test(formTitle)) {
    MoviesTitle = getTranslet(formTitle);
  } 


}



