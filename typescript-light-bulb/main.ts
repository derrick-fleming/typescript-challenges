const $lightbulb = document.querySelector('button') as HTMLButtonElement;
const $background = document.querySelector('.background-off') as HTMLBodyElement;

$lightbulb.addEventListener('click', (e: Event) => {
  if ($lightbulb.className === 'bulb bulb-off') {
    $lightbulb.className = 'bulb bulb-on'
    $background.className = 'background-on'
  } else {
    $lightbulb.className = 'bulb bulb-off'
    $background.className = 'background-off'
  }
})
