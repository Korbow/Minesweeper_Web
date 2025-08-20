import { getAdjacentIndices } from "./utils.js";
import { setGameEnded } from './TimerEtScore.js';
import { getTotalMines } from './mines.js';



function gameOver() {
  setGameEnded(true);
  document.dispatchEvent(new Event("gameOver"));
}
function gameWin() {
  setGameEnded(true);


  /* Effet confetti */

  const overlay = document.getElementById("confetti-overlay");
  const emoji = document.createElement("div");

  emoji.className = "emoji-center";
  emoji.textContent = "🎉";
  overlay.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);

  // Confettis circulaires
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("div");
    piece.className = "piece";
    piece.style.background = couleurAleatoire();

    // angle sur le cercle
    const angle = (i / 30) * Math.PI * 2;
    const radius = 80 + Math.random() * 60;

    const dx = Math.cos(angle) * radius + "px";
    const dy = Math.sin(angle) * radius + "px";

    piece.style.setProperty("--dx", dx);
    piece.style.setProperty("--dy", dy);

    piece.style.left = centerX + "px";
    piece.style.top = centerY + "px";

    overlay.appendChild(piece);

    setTimeout(() => piece.remove(), 2200);
  };



  /* appel d ouverture modal*/
  setTimeout(() => {
  document.dispatchEvent(new Event("Win"));
  }, 600);
}



function couleurAleatoire() {
  const couleurs = ["#e63946","#f1fa8c","#06d6a0","#118ab2","#ffbe0b"];
  return couleurs[Math.floor(Math.random() * couleurs.length)];
}








function raise() {

  document.dispatchEvent(new Event("raise"));
  console.log("raise effectué")
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

    lancerAnimBombe(x, y);

    gameOver();
  } 
  else if (mineCount > 0) {
    cell.style.backgroundColor = "white";
    cell.innerText = mineCount;

    if (mineCount == 1) cell.style.color = "blue";
    else if (mineCount == 2) cell.style.color = "green";
    else if (mineCount == 3) cell.style.color = "red";
    else if (mineCount == 4) cell.style.color = "purple";

    raise();
    verifierVictoire(allCells);

    
  } 
  else {
    cell.style.backgroundColor = "white";
    const neighbors = getAdjacentIndices(index, rows, cols);

    raise();
    verifierVictoire(allCells);

    neighbors.forEach(i => {
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