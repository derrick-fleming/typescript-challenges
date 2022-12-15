const $openButton = document.querySelector('.open-button') as HTMLButtonElement;
const $overlay = document.querySelector('.overlay.display-none') as HTMLDivElement;
const $modal = document.querySelector('.modal.display-none') as HTMLDivElement;
const $closeButton = document.querySelector('.no-button') as HTMLButtonElement;

$openButton.addEventListener('click', handleOpen);
$closeButton.addEventListener('click', handleClose);
$overlay.addEventListener('click', handleClose);

function handleOpen(e: MouseEvent) {
  $overlay.className = 'overlay';
  $modal.className = 'modal';
}

function handleClose(e: MouseEvent) {
  $overlay.className = 'display-none';
  $modal.className = 'display-none';
}
