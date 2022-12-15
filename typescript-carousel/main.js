var $pokedex = document.querySelector('.column-half.switch');
var $buttonRow = document.querySelector('.column-quarter.center');
// const $rightArrow = document.querySelector('.right-arrow') as HTMLButtonElement;
// const $leftArrow = document.querySelector('.left-arrow') as HTMLButtonElement;
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
var buttons = [0, 1, 2, 3, 4];
pokemonArray.forEach(function (pokemon, index) {
  var $image = document.createElement('img');
  $image.setAttribute('src', pokemon.src);
  $image.setAttribute('alt', pokemon.alt);
  $image.setAttribute('data-id', index.toString());
  if (index === 0) {
    $image.className = '';
  } else {
    $image.className = 'hidden';
  }
  $pokedex.appendChild($image);
});
buttons.forEach(function (button) {
  var $circle = document.createElement('button');
  $circle.className = button === 0
    ? 'fa-solid fa-circle'
    : 'fa-regular fa-circle';
  $circle.setAttribute('data-id', button.toString());
  $buttonRow.appendChild($circle);
});
var $imageArray = document.querySelectorAll('img');
var $buttonArray = $buttonRow.querySelectorAll('button');
$buttonRow.addEventListener('click', handleButtonRowClick);
function handleButtonRowClick(e) {
  var target = e.target;
  if (target.tagName !== 'BUTTON') {
    return;
  }
  var $closest = target.closest('button');
  $buttonArray.forEach(function (button) {
    button.className = $closest.dataset.id === button.dataset.id
      ? 'fa-solid fa-circle'
      : 'fa-regular fa-circle';
  });
  $imageArray.forEach(function (image) {
    image.className = $closest.dataset.id === image.dataset.id
      ? ''
      : 'hidden';
  });
}
