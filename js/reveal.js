import { getAdjacentIndices } from "./utils.js";
import { gameEnded } from './TimerEtScore.js';

export function reveal (cell, index, gridSize, allCells, revealed = new Set()) {
    if (revealed.has(index)) return; 
    revealed.add(index);
  
    const mineCount = cell.dataset.mineCount;
  
    if (cell.classList.contains("mine")) {
      cell.style.backgroundColor = "inherit";
      cell.style.backgroundImage = "url(img/logo_minesweeper.png)";
      cell.style.backgroundSize = "contain";

      
      gameEnded = true;

    } 
    else if (mineCount > 0) {
      cell.style.backgroundColor = "white";
      cell.innerText = mineCount;
  
      if (mineCount == 1) cell.style.color = "blue";
      else if (mineCount == 2) cell.style.color = "green";
      else if (mineCount == 3) cell.style.color = "red";
      else if (mineCount == 4) cell.style.color = "purple";
    } 
    else {
      // 0 mines autour, on révèle les voisins
      cell.style.backgroundColor = "white";
      const neighbors = getAdjacentIndices(index, gridSize);
  
      neighbors.forEach(i => {
        const neighborCell = allCells[i];
        reveal(neighborCell, i, gridSize, allCells, revealed); // récursif
      });
    }
}