document.addEventListener("DOMContentLoaded", function() {
    const gridDiv = document.getElementById("wordle-grid");
    const numRows = 6;
    const numCols = 5;
    let currentAttempt = 0;
    let currentPosition = 0;
    let currentGuess = "";
    let word = getRandomWord();

    function addBoxToGrid(row, col) {
        const cell = document.createElement("div");
        cell.classList.add("letter");
        cell.id = `cell-${row}-${col}`;
        gridDiv.appendChild(cell);
    }

    function setupGrid() {
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                addBoxToGrid(i, j);
            }
        }
    }

    function addLetterToCell(row, col, letter) {
        const cell = document.getElementById(`cell-${row}-${col}`);
        if (cell) {
            cell.textContent = letter.toUpperCase();
        }
    }

    function isLetter(char) {
        return char.length === 1 && char.match(/[a-z]/i);
    }

    document.addEventListener('keydown', (event) => {
        const keyPressed = event.key.toLowerCase();

        if (isLetter(keyPressed)) {
            addLetterToCell(currentAttempt, currentPosition, keyPressed);
            currentGuess += keyPressed;
            currentPosition++;
        } else if (keyPressed === 'backspace') {
            if (currentPosition > 0) {
                currentPosition--;
                addLetterToCell(currentAttempt, currentPosition, '');
                currentGuess = currentGuess.slice(0, -1);
            }
        } else if (keyPressed === 'enter') {
            if (currentPosition === word.length) {
                revealAttemptResult();
                currentAttempt++;
                currentPosition = 0;
                currentGuess = "";

                if (currentAttempt >= maxAttempts || currentGuess === word) {
                    endGame();
                }
            }
        }
    });

    function revealAttemptResult() {
        const result = checkWord(word, currentGuess);
        for (let i = 0; i < result.length; i++) {
            const cell = document.getElementById(`cell-${currentAttempt}-${i}`);
            if (cell) {
                cell.classList.add(result[i]);
            }
        }
    }

    setupGrid();
});

function getRandomWord() {
    const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    return words[Math.floor(Math.random() * words.length)];
}

function checkWord(word, guess) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess[i]) {
            result.push('correct');
        } else if (guess.includes(word[i])) {
            result.push('misplaced');
        } else {
            result.push('incorrect');
        }
    }
    return result;
}
