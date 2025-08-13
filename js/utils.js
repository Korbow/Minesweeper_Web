export function calculNombreAdjacent([rows, cols, cmines]){
    const allCells = document.querySelectorAll(".grid-cell");
    const nRows = rows;
    const nCols = cols;


    allCells.forEach((cell, index) => {
        if (cell.classList.contains("mine")) return;
        const neighbors = getAdjacentIndices(index, nRows, nCols);

        // compter combien de voisin on la classe .mine
        
        const mineCount = neighbors.reduce((count, i) => {
            return count + (allCells[i].classList.contains("mine") ? 1 : 0);
        }, 0);
        
        cell.dataset.mineCount = mineCount;
        console.log("la case "+ index +" a "+ mineCount +"mines adjacentes")     
    });
}    





export function getAdjacentIndices(index, rows, cols) {
    const indices = [];

    // conversion index → coordonnées
    const row = Math.floor(index / cols);
    const col = index % cols;

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;

            const newRow = row + dr;
            const newCol = col + dc;

            // vérifier que les coordonnées sont dans la grille
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newIndex = newRow * cols + newCol; // coordonnées → index
                indices.push(newIndex);
            }
        }
    }

    return indices;
}