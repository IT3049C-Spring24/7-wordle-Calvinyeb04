// Get the grid element
const gridDiv = document.getElementById('wordle-grid');

// Function to add a box to the grid
function addBoxToGrid(row, col) {
    const cell = document.createElement('div');
    cell.classList.add('letter');
    cell.id = `cell-${row}-${col}`;
    const gridDiv = document.getElementById('wordle-grid');
    gridDiv.appendChild(cell);
}

// Add a box to the grid at position (1, 1)
addBoxToGrid(1, 1);

// Game state object
let gameState = {
    word: "EXAMPLE",
    currentAttempt: 1,
    currentPosition: { row: 1, col: 1 },
    fullGrid: []
};

// Function to add a letter to a cell
function addLetterToCell(letter, row, col) {
    const cell = document.getElementById(`cell-${row}-${col}`);
    if (cell) {
        cell.textContent = letter;
    }
    gameState.currentPosition = { row: row, col: col };
    gameState.fullGrid[row - 1][col - 1] = letter;
}

// Function to initialize the grid
function initializeGrid() {
    const numRows = 6;
    const numCols = 5;
    for (let i = 0; i < numRows; i++) {
        gameState.fullGrid.push(new Array(numCols).fill(''));
    }
}

// Initialize the grid
initializeGrid();

// Add the letter 'E' to the cell at position (1, 1)
addLetterToCell('E', 1, 1);
