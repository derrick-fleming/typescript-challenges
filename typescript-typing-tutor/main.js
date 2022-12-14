/* eslint-disable no-unused-vars */
var $text = document.querySelector('.text');
var phrase = 'grumpy wizards make toxic brew';
var phraseArray = phrase.split('');
var spanIndex = 0;
var typingChallenge = phraseArray.map(function (phrase, index) {
  var $span = document.createElement('span');
  $span.textContent = phrase;
  if (phrase === ' ') {
    $span.className = 'white-space';
  }
  return $text.appendChild($span);
});
var $span = document.querySelectorAll('span');
document.addEventListener('keydown', handleTyping);
$span[0].className = 'border';
function handleTyping(e) {
  if (e.key !== $span[spanIndex].textContent) {
    $span[spanIndex].className = 'text-wrong';
    return;
  }
  $span[spanIndex].className = 'text-correct';
  spanIndex++;
  $span[spanIndex].className = 'border';
}
