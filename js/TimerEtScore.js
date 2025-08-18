
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

// Nom de l'evenemnt:
let raiseHandler = null;

let timerFinal = document.getElementById("timerFinal");



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
let scoreFinal = document.getElementById("scoreFinal");


export function setScoreElement(element) {
  scoreElement = element;
}

export function démarrerScore() {

  scoreCount = 0
  scoreElement.innerHTML = `<h3>Score : ${scoreCount} </h3>`;




  raiseHandler = () => {
    console.log("wow");
    scoreCount += 1;
    scoreElement.innerHTML = `<h3>Score : ${scoreCount} </h3>`;
  };

  // l’ajouter
  document.addEventListener("raise", raiseHandler);

}


document.addEventListener("gameOver", () => {
  if (gameEnded) {
    scoreFinal.innerHTML = `Score : ${scoreCount} `;
    console.log("detection score gameEnded bonne")
  }
});



export function resetScoreAndTimer() {

  scoreCount = 0
  secondes = 0;
  scoreElement.innerHTML = "";
  timerElement.innerHTML = "";
  if (raiseHandler) {
    document.removeEventListener("raise", raiseHandler);
    raiseHandler = null;
  }

  
}