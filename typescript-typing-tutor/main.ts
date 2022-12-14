const $text = document.querySelector('.text') as HTMLHeadingElement;
const $score = document.querySelector('.hidden') as HTMLHeadingElement;

const randomNumber = Math.random() * 100;
const phrase = randomNumber >= 50
  ? 'grumpy wizards make toxic brew'
  : 'What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.';

const phraseArray = phrase.split('');
let spanIndex = 0;
let accuracyScore = 0;

phraseArray.forEach((phrase) => {
  const $span = document.createElement('span');
  $span.textContent = phrase
  if (phrase === ' ') {
    $span.className = 'white-space'
  }
  $text.appendChild($span);
})

const $span = document.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;
document.addEventListener('keydown', handleTyping);


$span[0].className = 'border';

function handleTyping(e: KeyboardEvent) {
  if (spanIndex >= $span.length) {
    return;
  }

  if (e.key !== $span[spanIndex].textContent) {
    $span[spanIndex].className = 'text-wrong';
    accuracyScore--;
    return;
  }
  $span[spanIndex].className = 'text-correct';

  spanIndex++
  accuracyScore++

  if (spanIndex >= $span.length) {
    const calculateScore = Math.floor(100 * (accuracyScore / ($span.length)))
    $score.className='score';
    $score.textContent = `Your Accuracy: ${calculateScore}%`
    return;
  }

  $span[spanIndex].className = 'border'
}
