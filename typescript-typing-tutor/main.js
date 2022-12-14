var $text = document.querySelector('.text');
var $score = document.querySelector('.hidden');
var randomNumber = Math.random() * 100;
var phrase = randomNumber >= 50
  ? 'grumpy wizards make toxic brew'
  : 'What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.';
var phraseArray = phrase.split('');
var spanIndex = 0;
var accuracyScore = 0;
phraseArray.forEach(function (phrase) {
  var $span = document.createElement('span');
  $span.textContent = phrase;
  if (phrase === ' ') {
    $span.className = 'white-space';
  }
  $text.appendChild($span);
});
var $span = document.querySelectorAll('span');
document.addEventListener('keydown', handleTyping);
$span[0].className = 'border';
function handleTyping(e) {
  if (spanIndex >= $span.length) {
    return;
  }
  if (e.key !== $span[spanIndex].textContent) {
    $span[spanIndex].className = 'text-wrong';
    accuracyScore--;
    return;
  }
  $span[spanIndex].className = 'text-correct';
  spanIndex++;
  accuracyScore++;
  if (spanIndex >= $span.length) {
    var calculateScore = Math.floor(100 * (accuracyScore / ($span.length)));
    $score.className = 'score';
    $score.textContent = 'Your Accuracy: '.concat(calculateScore, '%');
    return;
  }
  $span[spanIndex].className = 'border';
}
