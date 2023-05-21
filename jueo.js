var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
var isInvincible = false;

// Lógica del juego y dibujo del dinosaurio

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 86) { // Código de tecla para la letra "v"
    isInvincible = true;
    // Lógica para activar la invencibilidad
  }
});
