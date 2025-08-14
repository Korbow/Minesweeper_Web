
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

const timerFinal = document.getElementById("timerFinal");



export function setTimerElement(element) {
  timerElement = element;
}

export function démarrerTimer() {
  secondes = 0;
  gameEnded = false;

  timerElement.innerHTML =`<h3>Temps : ${secondes} s</h3>`;

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    if (gameEnded) {
      if(secondes <= 60){
        timerFinal.innerHTML =`Temps : ${secondes}s`
      }else{
        timerFinal.innerHTML =`Temps : ${secondes/60}m ${secondes}s`
      }
      clearInterval(timerInterval);
      

    } else {
      secondes++;
      if (timerElement) {
        timerElement.innerHTML = `<h3>Temps : ${secondes} s</h3>`;
      }
    }
  }, 1000);
}






let scoreCount = null;
let scoreElement = null;


export function setScoreElement(element) {
  scoreElement = element;
}

export function démarrerScore() {

  scoreCount = 0
  scoreElement.innerHTML = `<h3>Score : ${scoreCount} </h3>`;


  document.addEventListener("raise", () => { 
    console.log("wow")
    scoreCount += 1;
    scoreElement.innerHTML = `<h3>Score : ${scoreCount} </h3>`;

  });


  if (gameEnded) {
    scoreFinal.innerHTML =`<h3>Score : ${scoreCount} </h3>`;
    console.log("detection score gameEnded bonne")
  }


}
