const $pokedex = document.querySelector('.column-half.switch') as HTMLDivElement;
const $buttonRow = document.querySelector('.column-quarter.center') as HTMLDivElement;
const $rightArrow = document.querySelector('.right-arrow') as HTMLButtonElement;
const $leftArrow = document.querySelector('.left-arrow') as HTMLButtonElement;

const pokemonArray: {src: string, alt: string}[] = [
  {src: 'images/001.png',
   alt: 'Bulbasaur'},
  {src: 'images/004.png',
   alt: 'Charmander'},
  {src: 'images/007.png',
   alt: 'Squirtle'},
  {src: 'images/025.png',
   alt: 'Pikachu'},
  {src: 'images/039.png',
   alt: 'Jigglypuff'}
]

const buttons: number[] = [0, 1, 2, 3, 4];

pokemonArray.forEach((pokemon, index) => {
  const $image = document.createElement('img');
  $image.setAttribute('src', pokemon.src)
  $image.setAttribute('alt', pokemon.alt)
  $image.setAttribute('data-id', index.toString())
  if (index === 0) {
    $image.className = ''
  } else {
  $image.className = 'hidden'
  }
  $pokedex.appendChild($image);
})

buttons.forEach(button => {
  const $circle = document.createElement('button');
  $circle.className = button === 0
    ? 'fa-solid fa-circle'
    : 'fa-regular fa-circle'
  $circle.setAttribute('data-id', button.toString());
  $buttonRow.appendChild($circle);
})

const $imageArray: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');
const $buttonArray: NodeListOf<HTMLButtonElement> = $buttonRow.querySelectorAll('button')

$buttonRow.addEventListener('click', handleButtonRowClick);
$rightArrow.addEventListener('click', handleNextImage);
$leftArrow.addEventListener('click', handleNextImage);

let index = 0;

function handleButtonRowClick(e: MouseEvent) {
  const target = e.target as HTMLButtonElement;
  if (target.tagName !== 'BUTTON') {
    return;
  }

  const $closest = target.closest('button');

  $buttonArray.forEach(button => {
    button.className = $closest.dataset.id === button.dataset.id
      ? 'fa-solid fa-circle'
      : 'fa-regular fa-circle'
    })

  $imageArray.forEach(image => {
    image.className = $closest.dataset.id === image.dataset.id
      ? ''
      : 'hidden'
  })

  index = Number($closest.dataset.id)
};

function handleNextImage(e: MouseEvent) {
  const target = e.target as HTMLButtonElement;
  const $arrow = target.closest('button');
  if ($arrow.className === 'right-arrow') {
    index = ((index + 1) % $imageArray.length);
  } else {
    index = (((index - 1) + $imageArray.length) % $imageArray.length)
  }
  $imageArray.forEach(image => {
    image.className = index.toString() === image.dataset.id
      ? ''
      : 'hidden'
  })
}
