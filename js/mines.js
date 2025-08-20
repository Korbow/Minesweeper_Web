let totalmines = 0;
/* Place les mines en fonction des colonnes, lignes et n de mines*/
export function placementMine([rows, cols, cmines]) {
  const totalCells = rows * cols;
  const selectedIndices = new Set();
  const allCells = document.querySelectorAll(".grid-cell");

  totalmines = cmines;

  while (selectedIndices.size < cmines) {
    const randIndex = Math.floor(Math.random() * totalCells);
    selectedIndices.add(randIndex); 
  }
  selectedIndices.forEach((index) => {
    const cell = allCells[index];
    cell.classList.add("mine");
  });
  return totalmines;
}

/* Pour détecter victoire dans reveal.js*/
export function getTotalMines() {
  console.log(totalmines);
  return totalmines;
}
