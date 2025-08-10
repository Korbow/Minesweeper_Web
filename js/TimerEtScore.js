
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

const scoreFinal = document.getElementById("scoreFinal");
const timerFinal = document.getElementById("timerFinal");

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
      if(secondes <= 60){
        scoreFinal.innerHTML =`Score : ${secondes}s`
      }else{
        scoreFinal.innerHTML =`Score : ${secondes/60}m ${secondes}s`
      }
      clearInterval(timerInterval);
      

    } else {
      secondes++;
      if (timerElement) {
        timerElement.innerHTML = `<h3>Chronomètre : ${secondes} s</h3>`;
      }
    }
  }, 1000);
}