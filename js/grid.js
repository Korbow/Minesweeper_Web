import { reveal } from './reveal.js';

export function createGrid(rows, cols) {
    const gridContainer = document.getElementById("game-grid");
    contenu.appendChild(gridContainer);
    gridContainer.innerHTML = ""; // reset si grille
    
  
    const gridSize = cols; // important pour les calculs

    const allCells = []; // on stocke les cellules pour y accéder dans reveal()


    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");

      const x = i % cols;         // colonne 
      const y = Math.floor(i / cols); // ligne 



      cell.dataset.index = i; // pour identification
      cell.dataset.x = x;
      cell.dataset.y = y;

      allCells.push(cell); // stocke la cellule
  

      // au clic
      cell.addEventListener("click", () => {
        reveal(cell, i, gridSize, allCells);
      });
  
      gridContainer.appendChild(cell);
    }
  }