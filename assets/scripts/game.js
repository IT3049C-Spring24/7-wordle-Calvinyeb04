
// Game configuration
const gameConfig = {
  rows: 5,
  cols: 5,
};

// Reference to the grid div
let gridDiv = document.getElementById("wordle-grid");

// Function to add a box to the grid
function addBoxToGrid(row, col) {
  let cell = document.createElement("div");
  cell.className = "letter";
  cell.id = `cell-${row}-${col}`;
  cell.addEventListener('click', () => {
    gameState.currentPosition.row = row;
    gameState.currentPosition.col = col;
    console.log('Current position:', gameState.currentPosition);
  });
  gridDiv.appendChild(cell);
}

// Function to setup the grid
function setupGrid() {
  for (let row = 0; row < gameConfig.rows; row++) {
    for (let col = 0; col < gameConfig.cols; col++) {
      addBoxToGrid(row, col);
    }
  }
}

// Function to add a letter to a cell
function addLetterToCell(row, col, letter) {
  let cell = document.getElementById(`cell-${row}-${col}`);
  if (cell) {
    cell.textContent = letter;
  }
}

// Setup the grid
setupGrid();

// Add a letter to a cell
addLetterToCell(0, 0, 'H');

// Game state
let gameState = {
  word: "HELLO",
  currentAttempt: 0,
  currentPosition: { row: 0, col: 0 },
  grid: [],
};

// Function to check if input is a letter
function isLetter(letter) {
  return letter.length === 1 && letter.match(/[a-z]/i);
}

// Add an event listener to capture user input
document.addEventListener('keydown', (event) => {
  // Get the key that was pressed
  const key = event.key;
  
  // Print the user input to the console
  console.log('User input:', key);
  
  // Check for specific keys
  switch(key) {
      case 'Enter':
          // Handle Enter key press
          console.log('Enter key pressed');
          break;
          case 'Backspace':
            // Handle Backspace key press
            console.log('Backspace key pressed');
            // Remove the letter from the current cell
            if (gameState.currentPosition.col > 0) {
                gameState.currentPosition.col--;
                let cell = document.getElementById(`cell-${gameState.currentPosition.row}-${gameState.currentPosition.col}`);
                if (cell) {
                    cell.textContent = '';
                }
            } else if (gameState.currentPosition.row > 0) {
                gameState.currentPosition.row--;
                gameState.currentPosition.col = gameConfig.cols - 1;
                let cell = document.getElementById(`cell-${gameState.currentPosition.row}-${gameState.currentPosition.col}`);
                if (cell) {
                    cell.textContent = '';
                }
            }
            break;
        
      default:
          // Handle other keys (letters)
          if (isLetter(key)) {
            console.log('Letter pressed:', key);
            addLetterToCell(gameState.currentPosition.row, gameState.currentPosition.col, key.toUpperCase());
            gameState.currentPosition.col++;
            if (gameState.currentPosition.col >= gameConfig.cols) {
              gameState.currentPosition.row++;
              gameState.currentPosition.col = 0;
            }
          }
          break;
  }
});