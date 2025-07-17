
import { createGrid } from './grid.js';
import { placementMine } from './mines.js';

import {calculNombreAdjacent } from './utils.js';



  
// Debut du Main




  export function lancerJeu() {
    console.log("jeu démarré");
  
    const contenu = document.getElementById("contenu");
    const texteAffiche = document.createElement("div");
    contenu.appendChild(texteAffiche);
    texteAffiche.classList.add("text-affiche");
  
    const score = document.createElement("div");
    score.classList.add("score");
    score.innerHTML = "<h3>Score : 0</h3>";
    texteAffiche.appendChild(score);
  
    const timer = document.createElement("div");
    timer.classList.add("timer");
    timer.innerHTML = "<h3>Chronomètre : 0</h3>";
    texteAffiche.appendChild(timer);
  
    createGrid(10, 10);
    placementMine(10, 10);
    calculNombreAdjacent(10, 10);
  }
  