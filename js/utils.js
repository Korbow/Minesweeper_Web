export function calculNombreAdjacent([rows, cols, cmines]) {
  const allCells = document.querySelectorAll(".grid-cell");
  const nRows = rows;
  const nCols = cols;

  allCells.forEach((cell, index) => {
    if (cell.classList.contains("mine")) return;
    const neighbors = getAdjacentIndices(index, nRows, nCols);



    const mineCount = neighbors.reduce((count, i) => {
      return count + (allCells[i].classList.contains("mine") ? 1 : 0);
    }, 0);

    cell.dataset.mineCount = mineCount;
    console.log("la case " + index + " a " + mineCount + "mines adjacentes");
  });
}

export function getAdjacentIndices(index, rows, cols) {
  const indices = [];

  // conversion index -> coordonnées
  const row = Math.floor(index / cols);
  const col = index % cols;

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;

      const newRow = row + dr;
      const newCol = col + dc;

      // vérifier que les coordonnées sont dans la grille
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        const newIndex = newRow * cols + newCol; 
        indices.push(newIndex);
      }
    }
  }

  return indices;
}

/* Animation de victoire */
export function launchWinAnimation() {
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
  }
}

function couleurAleatoire() {
  const couleurs = ["#e63946", "#f1fa8c", "#06d6a0", "#118ab2", "#ffbe0b"];
  return couleurs[Math.floor(Math.random() * couleurs.length)];
}

/* Animation de Game over */
export function launchExplosion(
  x = window.innerWidth / 2,
  y = window.innerHeight / 2
) {
  const overlay = document.getElementById("explosionGO-overlay");
  const emoji = document.createElement("div");

  emoji.className = "emoji-center-bomb";
  emoji.textContent = "💣";
  overlay.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);

 
  for (let i = 0; i < 14; i++) {
    const ang = Math.random() * Math.PI * 2;
    const spd = 50 + Math.random() * 100; // distance de translation
    const rot = Math.random() * 720 + "deg";

    const dx = Math.cos(ang) * spd + "px";
    const dy = Math.sin(ang) * spd + "px";

    const part = document.createElement("div");
    part.className = "particle";
    part.style.left = x + "px";
    part.style.top = y + "px";
    part.style.setProperty("--dx", dx);
    part.style.setProperty("--dy", dy);
    part.style.setProperty("--rot", rot);

    overlay.appendChild(part);
    setTimeout(() => part.remove(), 1000);
  }

  // fumée
  for (let i = 0; i < 15; i++) {
    const dx = (Math.random() - 0.5) * 20 + "px";
    const dy = (Math.random() - 0.5) * 20 - 20 + "px";

    const smoke = document.createElement("div");
    smoke.className = "particle smoke";
    smoke.style.left = x + "px";
    smoke.style.top = y + "px";
    smoke.style.setProperty("--dx", dx);
    smoke.style.setProperty("--dy", dy);
    smoke.style.setProperty("--rot", "0deg");

    overlay.appendChild(smoke);
    setTimeout(() => smoke.remove(), 1000);
  }
}
