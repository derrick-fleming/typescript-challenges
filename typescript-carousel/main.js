var $pokedex = document.querySelector('.column-half.switch');
var $buttonRow = document.querySelector('.row.button-row');
var pokemonArray = [
  {
    src: 'images/001.png',
    alt: 'Bulbasaur'
  },
  {
    src: 'images/004.png',
    alt: 'Charmander'
  },
  {
    src: 'images/007.png',
    alt: 'Squirtle'
  },
  {
    src: 'images/025.png',
    alt: 'Pikachu'
  },
  {
    src: 'images/039.png',
    alt: 'Jigglypuff'
  }
];
// eslint-disable-next-line no-sparse-arrays
var buttons = [, , , ,];
pokemonArray.forEach(function (pokemon, index) {
  var $image = document.createElement('img');
  $image.setAttribute('src', pokemon.src);
  $image.setAttribute('alt', pokemon.alt);
  $image.setAttribute('data-image', index.toString());
  if (index === 0) {
    $image.className = '';
  } else {
    $image.className = 'hidden';
  }
  $pokedex.appendChild($image);
});
buttons.forEach(function (button, index) {
  var $circle = document.createElement('button');
  $circle.className = 'fa-solid fa-circle';
  $circle.setAttribute('data-id', index.toString());
  $buttonRow.appendChild($circle);
});
