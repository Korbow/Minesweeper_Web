import { reveal } from './reveal.js';

const gridColsNRows = document.querySelector(".game-grid")
export function createGrid([rows, cols, cmines]) {
    const gameGrid = document.getElementById("game-grid");
    gridSpace.appendChild(gameGrid);
    gameGrid.innerHTML = ""; // reset si grille
    
    gridColsNRows.style.setProperty("--cols", cols);
    gridColsNRows.style.setProperty("--rows", rows);
    

    const nCols = cols;
    const nRows = rows;

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
        reveal(cell, i, nRows, nCols, allCells);
      });
  
      gameGrid.appendChild(cell);
    }
  }