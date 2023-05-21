document.addEventListener('keydown', function(event) {
  if (event.key === 'v' || event.key === 'V') {
    CancelEvent('Game Over');
  }
});
