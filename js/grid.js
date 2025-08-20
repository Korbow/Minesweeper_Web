import { reveal } from "./reveal.js";

const gridColsNRows = document.querySelector(".game-grid");
export function createGrid([rows, cols, cmines]) {
  const gameGrid = document.getElementById("game-grid");
  gridSpace.appendChild(gameGrid);
  gameGrid.innerHTML = ""; // reset 

  gridColsNRows.style.setProperty("--cols", cols);
  gridColsNRows.style.setProperty("--rows", rows);

  const nCols = cols;
  const nRows = rows;

  const allCells = []; // on stocke les cellules pr reveal()

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    const x = i % cols; 
    const y = Math.floor(i / cols); 

    cell.dataset.index = i; // id
    cell.dataset.x = x;
    cell.dataset.y = y;

    allCells.push(cell); // stockage

    // clic event
    cell.addEventListener("click", () => {
      reveal(cell, i, nRows, nCols, allCells);
    });

    cell.addEventListener("contextmenu", (event) => {
      event.preventDefault(); // empêche clic droit

      /*conditions*/
      if (cell.dataset.flaged === "true") {
        console.log("Déjà flaguée !");
        return; 
      }
      if (cell.classList.contains("revealed")) {
        console.log("Déjà révélé !");
        return; // 
      }

      cell.dataset.flaged = "true";
      setTimeout(() => {
        cell.innerHTML = `
          <div class="flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <rect x="10" y="5" width="3" height="30" fill="#333"/>
              <path class="flag-cloth" d="M13 5 L30 10 L13 15 Z" fill="#e63946"/>
            </svg>
          </div>`;

        const flag = cell.querySelector(".flag");
        console.log(flag);
        setTimeout(() => {
          flag.classList.add("anim");
        }, 100);
      }, 10);
    });

    gameGrid.appendChild(cell);
  }
}
