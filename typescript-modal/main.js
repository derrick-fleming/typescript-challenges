var $openButton = document.querySelector('.open-button');
var $overlay = document.querySelector('.overlay.display-none');
var $modal = document.querySelector('.modal.display-none');
var $closeButton = document.querySelector('.no-button');
$openButton.addEventListener('click', handleOpen);
$closeButton.addEventListener('click', handleClose);
$overlay.addEventListener('click', handleClose);
function handleOpen(e) {
  $overlay.className = 'overlay';
  $modal.className = 'modal';
}
function handleClose(e) {
  $overlay.className = 'display-none';
  $modal.className = 'display-none';
}
