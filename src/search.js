'use strict';
console.log('search');
export function performSearch(inputValue) {
  const searchText = inputValue.toLowerCase();
  const $movieCards = document.querySelectorAll('.movie-card');

  $movieCards.forEach((card) => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    console.log(title, searchText);
    if (title.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
