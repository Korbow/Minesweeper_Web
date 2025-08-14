
import { createGrid } from './grid.js';
import { placementMine } from './mines.js';
import { démarrerTimer, setTimerElement } from './TimerEtScore.js';
import { démarrerScore, setScoreElement } from './TimerEtScore.js';
import {calculNombreAdjacent } from './utils.js';
import { getDifficulty } from './modal.js';



  
// Debut du Main
const Chronometre = document.getElementById("Chronometre");
const OverlayPanel = document.getElementById("OverlayPanel");
Chronometre.style.display = "none";
OverlayPanel.style.display = "none";



  export function lancerJeu() {
    
    console.log("jeu démarré");
    
    const niveau = getDifficulty(); 
    console.log(niveau);

    Chronometre.style.display = "block";


    const texteAffiche = document.createElement("div");
    Chronometre.appendChild(texteAffiche);
    texteAffiche.classList.add("text-affiche");
  
    const score = document.createElement("div");
    score.classList.add("score");
    texteAffiche.appendChild(score);

    setScoreElement(score);
    démarrerScore();

    const timer = document.createElement("div");
    timer.classList.add("timer");

    texteAffiche.appendChild(timer);

    setTimerElement(timer);
    démarrerTimer();

    OverlayPanel.style.display = "block";
      
  
    createGrid(niveau);
    placementMine(niveau);
    calculNombreAdjacent(niveau);
  }
  