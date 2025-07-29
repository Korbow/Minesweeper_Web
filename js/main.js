
import { createGrid } from './grid.js';
import { placementMine } from './mines.js';
import { démarrerTimer, setTimerElement } from './TimerEtScore.js';
import {calculNombreAdjacent } from './utils.js';



  
// Debut du Main

const facile = [10, 10, 12];
const moyen = [14, 14, 30];
const difficile = [18, 18, 66]

var difficulty = facile;

  export function lancerJeu() {
    console.log("jeu démarré");
  
    const contenu = document.getElementById("contenu");
    const texteAffiche = document.createElement("div");
    contenu.appendChild(texteAffiche);
    texteAffiche.classList.add("text-affiche");
  
    const score = document.createElement("div");
    score.classList.add("score");
    
    const timer = document.createElement("div");
    timer.classList.add("timer");
    texteAffiche.appendChild(timer);

    setTimerElement(timer);
    démarrerTimer();
      
  
    createGrid(difficulty);
    placementMine(difficulty);
    calculNombreAdjacent(difficulty);
  }
  