
let gameEnded = false;

export function getGameEnded() {
  return gameEnded;
}

export function setGameEnded(value) {
  gameEnded = value;
}

let secondes = 0;
let timerInterval = null;
let timerElement = null;

export function setTimerElement(element) {
  timerElement = element;
}

export function démarrerTimer() {
  secondes = 0;
  gameEnded = false;

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    if (gameEnded) {
      clearInterval(timerInterval);
    } else {
      secondes++;
      if (timerElement) {
        timerElement.innerHTML = `<h3>Chronomètre : ${secondes} s</h3>`;
      }
    }
  }, 1000);
}