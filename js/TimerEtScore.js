
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

let timerFinalGO = document.getElementById("timerFinalGO");
let scoreFinalGO = document.getElementById("scoreFinalGO");

let timerFinalWIN = document.getElementById("timerFinalWIN");
let scoreFinalWIN = document.getElementById("scoreFinalWIN");




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
        timerFinalGO.innerHTML =`Temps : ${secondes}s`
        timerFinalWIN.innerHTML =`Temps : ${secondes}s`
      }else{
        timerFinalGO.innerHTML =`Temps : ${secondes/60}m ${secondes}s`
        timerFinalWIN.innerHTML =`Temps : ${secondes/60}m ${secondes}s`
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
    scoreFinalGO.innerHTML = `Score : ${scoreCount} `;
    console.log("detection score gameEnded bonne")
  }
});

document.addEventListener("Win", () => {
  if (gameEnded) {
    scoreFinalWIN.innerHTML = `Score : ${scoreCount} `;
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