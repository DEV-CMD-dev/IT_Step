class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hasMine = false;
        this.isFlagged = false;
        this.isRevealed = false;
        this.neighbourMines = 0;
        this.element = null;
    }

    reveal() {
        if (this.isRevealed) return;
        this.isRevealed = true;
        if (this.isFlagged) {
            this.isFlagged = false;
            this.element.classList.remove('flagged');
        }

        this.updateClass();

        if (this.neighbourMines > 0) {
            this.element.textContent = this.neighbourMines;
        }
    }

    toggleFlag() {
        if (this.isRevealed) return;

        this.isFlagged = !this.isFlagged;
        this.updateClass();
    }

    updateClass() {
        if (!this.element) return;
        this.element.className = 'cell';

        if (!this.isRevealed) {
            this.element.classList.add(this.isFlagged ? 'flagged' : 'closed');
        } else {
            this.element.classList.add(this.hasMine ? 'mine' : 'empty');
        }
    }
}

const field = document.querySelector(".field");
const restartButton = document.querySelector(".restartButton")
let restartButtonImg = restartButton.querySelector("img");


restartButton.addEventListener("click", () => {
    location.reload();
})

class Game {


    constructor(width, height, mineCount) {
        this.width = width;
        this.height = height;
        this.mineCount = mineCount;
        this.cells = [];

        // this.revealedCount = 0;
        // this.flagCount = 0;

        // this.minesCounter = document.getElementById("mines");
        // this.flagsCounter = document.getElementById("flags");

    }

    init() {
        this.generateCells();
        this.placeMines();
        this.calculateAllNeighbours();
    }

    generateCells() {
        field.innerHTML = '';
        this.cells = [];

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (let x = 0; x < this.width; x++) {
                const cell = new Cell(x, y);

                const div = document.createElement('div');
                div.classList.add('cell');
                cell.element = div;
                cell.updateClass();

                div.addEventListener('click', () => this.handleReveal(x, y));
                div.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    cell.toggleFlag();
                });

                field.appendChild(div);
                this.cells[y][x] = cell;
            }
        }
    }

    placeMines() {
        const total = this.width * this.height;
        const mineIndices = new Set();
        while (mineIndices.size < this.mineCount) {
            mineIndices.add(Math.floor(Math.random() * total));
        }

        for (let i of mineIndices) {
            const x = i % this.width;
            const y = Math.floor(i / this.width);
            this.cells[y][x].hasMine = true;
        }
    }

    getCell(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return null;
        return this.cells[y][x];
    }

    calculateAllNeighbours() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const cell = this.getCell(x, y);
                if (cell.hasMine) continue;

                let count = 0;
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0) continue;
                        const neighbor = this.getCell(x + dx, y + dy);
                        if (neighbor?.hasMine) count++;
                    }
                }
                cell.neighbourMines = count;
            }
        }
    }

    handleReveal(x, y) {
        const cell = this.getCell(x, y);
        if (!cell || cell.isRevealed || cell.isFlagged) return;

        if (cell.hasMine) {

            cell.reveal();
            this.revealAllMines();
            restartButtonImg.src = "../images/face_lose.svg"
            return;
        }

        this.revealRecursive(x, y);
    }

    revealRecursive(x, y) {
        const cell = this.getCell(x, y);
        if (!cell || cell.isRevealed || cell.isFlagged) return;

        cell.reveal();

        if (cell.neighbourMines === 0 && !cell.hasMine) {
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    if (dx !== 0 || dy !== 0) {
                        this.revealRecursive(x + dx, y + dy);
                    }
                }
            }
        }
    }

    revealAllMines() {
        for (let row of this.cells) {
            for (let cell of row) {
                if (cell.hasMine) {
                    cell.reveal();
                }
            }
        }
    }
}


const game = new Game(8, 8, 10);
game.init();
