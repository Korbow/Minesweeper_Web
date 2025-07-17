export function getAdjacentIndices(index, gridSize) {
    const indices = [];
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;

            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
                const newIndex = newRow * gridSize + newCol;
                indices.push(newIndex);
            }
        }
      }
    
      return indices; 
    }

export function calculNombreAdjacent(rows, cols){
    const allCells = document.querySelectorAll(".grid-cell");
    const gridSize = rows;


    allCells.forEach((cell, index) => {
        if (cell.classList.contains("mine")) return;
        const neighbors = getAdjacentIndices(index, gridSize);

        // compter combien de voisin on la classe .mine
        
        const mineCount = neighbors.reduce((count, i) => {
            return count + (allCells[i].classList.contains("mine") ? 1 : 0);
        }, 0);
        
        cell.dataset.mineCount = mineCount;
        console.log("la case "+ index +" a "+ mineCount +"mines adjacentes")
        
});
}    