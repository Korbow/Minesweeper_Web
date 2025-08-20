import {
  getAdjacentIndices,
  launchWinAnimation,
  launchExplosion,
} from "./utils.js";
import { setGameEnded } from "./TimerEtScore.js";
import { getTotalMines } from "./mines.js";

function gameOver() {
  setGameEnded(true);
  launchExplosion();

  setTimeout(() => {
    document.dispatchEvent(new Event("gameOver"));
  }, 1000);
}
function gameWin() {
  setGameEnded(true);
  launchWinAnimation();



  /* appel d ouverture modal*/
  setTimeout(() => {
    document.dispatchEvent(new Event("Win"));
  }, 600);
}

function raise() {
  document.dispatchEvent(new Event("raise"));
  console.log("raise effectué");
}

let revealedCount = 0;

export function resetRevealedCount() {
  revealedCount = 0;
}

export function reveal(cell, index, rows, cols, allCells) {
  if (cell.classList.contains("revealed")) return; // déjà révélé
  cell.classList.add("revealed");

  revealedCount++; // on compte cette case comme révélée

  const mineCount = cell.dataset.mineCount;

  if (cell.classList.contains("mine")) {
    cell.style.backgroundColor = "inherit";
    cell.style.backgroundImage = "url(../resources/img/logo_minesweeper.png)";
    cell.style.backgroundSize = "contain";

    const rect = cell.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    gameOver();
  } else if (mineCount > 0) {
    cell.style.backgroundColor = "white";
    cell.innerText = mineCount;

    if (mineCount == 1) cell.style.color = "blue";
    else if (mineCount == 2) cell.style.color = "green";
    else if (mineCount == 3) cell.style.color = "red";
    else if (mineCount == 4) cell.style.color = "purple";

    raise();
    verifierVictoire(allCells);
  } else {
    cell.style.backgroundColor = "white";
    const neighbors = getAdjacentIndices(index, rows, cols);

    raise();
    verifierVictoire(allCells);

    neighbors.forEach((i) => {
      reveal(allCells[i], i, rows, cols, allCells);
    });
  }
}

function verifierVictoire(allCells) {
  const nmines = getTotalMines();
  const totalCells = allCells.length;
  const safeCells = totalCells - nmines;

  console.log("safeCells =", safeCells, "; revealed =", revealedCount);

  if (revealedCount === safeCells) {
    console.log("Victoire 🎉");
    gameWin();

    return true;
  }
  return false;
}
