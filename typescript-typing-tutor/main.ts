const $text = document.querySelector('.text') as HTMLHeadingElement;

const phrase = 'grumpy wizards make toxic brew';
const phraseArray = phrase.split('');
let spanIndex = 0;

const typingChallenge = phraseArray.map((phrase, index) => {
  const $span = document.createElement('span');
  $span.textContent = phrase
  if (phrase === ' ') {
    $span.className = 'white-space'
  }
  return $text.appendChild($span);
})

const $span = document.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;
document.addEventListener('keydown', handleTyping);

$span[0].className = 'border';

function handleTyping(e: KeyboardEvent) {
  if (e.key !== $span[spanIndex].textContent) {
    $span[spanIndex].className = 'text-wrong';
    return;
  }
  $span[spanIndex].className = 'text-correct';
  spanIndex++
  $span[spanIndex].className = 'border'
}
