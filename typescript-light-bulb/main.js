var $lightbulb = document.querySelector('button');
var $background = document.querySelector('.background-off');
$lightbulb.addEventListener('click', function (e) {
  if ($lightbulb.className === 'bulb bulb-off') {
    $lightbulb.className = 'bulb bulb-on';
    $background.className = 'background-on';
  } else {
    $lightbulb.className = 'bulb bulb-off';
    $background.className = 'background-off';
  }
});
