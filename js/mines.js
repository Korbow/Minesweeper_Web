export function placementMine (rows, cols) {
    const totalCells = rows * cols;
    const selectedIndices = new Set();
    const allCells = document.querySelectorAll(".grid-cell");
    
    while (selectedIndices.size < 12) {
      const randIndex = Math.floor(Math.random() * totalCells);
      selectedIndices.add(randIndex); // les doublons sont ignorés automatiquement
    }
    selectedIndices.forEach(index => {
        const cell = allCells[index];
        cell.classList.add("mine");
      });

  }
