
import { createGrid } from './grid.js';
import { placementMine } from './mines.js';
import { démarrerTimer, setTimerElement } from './TimerEtScore.js';
import {calculNombreAdjacent } from './utils.js';



  
// Debut du Main

const facile = [10, 10, 12];
const moyen = [15, 15, 32];
const difficile = [17, 17, 75];


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
      
  
    createGrid(moyen);
    placementMine(moyen);
    calculNombreAdjacent(moyen);
  }
  