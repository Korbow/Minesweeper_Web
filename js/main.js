
import { createGrid } from './grid.js';
import { placementMine } from './mines.js';
import { démarrerTimer, setTimerElement } from './TimerEtScore.js';
import {calculNombreAdjacent } from './utils.js';
import { getDifficulty } from './modal.js';



  
// Debut du Main




  export function lancerJeu() {
    console.log("jeu démarré");
    
    const niveau = getDifficulty(); 

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
      
  
    createGrid(niveau);
    placementMine(niveau);
    calculNombreAdjacent(niveau);
  }
  