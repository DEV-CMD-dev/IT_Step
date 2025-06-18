const field = document.querySelector(".field");

class Cell {
    constructor() {
        this.hasMine = false;
        this.isFlagged = false;
        this.isRevealed = false;
        this.neighbourMines = 0;
        this.element = null;
    }

    reveal() {
        this.isRevealed = true;
        if (this.isFlagged) {
            this.isFlagged = false;
            this.element.classList.remove('flagged');
        }

        this.updateClass();
    }

    toggleFlag() {
        if (this.isRevealed) return;

        this.isFlagged = !this.isFlagged;
        this.updateClass();
    }

    updateClass() {
        if (!this.element) return;

        this.element.classList.remove('closed', 'flagged', 'mine', 'empty');

        if (!this.isRevealed) {
            if (this.isFlagged) {
                this.element.classList.add('flagged');
            } else {
                this.element.classList.add('closed');
            }
        } else {
            if (this.hasMine) {
                this.element.classList.add('mine');
            } else {
                this.element.classList.add('empty');
            }
        }
    }
}

class Game {
    constructor(length, mines) {
        this.length = length;
        this.availableMines = mines;
        this.cells = [];
    }

    generateMines() {
        const totalCells = this.length;
        const mineIndexes = new Set();

        while (mineIndexes.size < this.availableMines) {
            let index = Math.floor(Math.random() * totalCells);
            mineIndexes.add(index);
        }

        field.innerHTML = '';
        this.cells = [];

        for (let i = 0; i < totalCells; i++) {
            let cell = new Cell();
            if (mineIndexes.has(i)) {
                cell.hasMine = true;
            }

            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cell.element = cellDiv;

            cell.updateClass();

            cellDiv.addEventListener('click', () => {
                if (cell.isFlagged || cell.isRevealed) return;
                cell.reveal();
                console.log(`Clicked cell ${i}, mine: ${cell.hasMine}`);
            });

            cellDiv.addEventListener('contextmenu', (ev) => {
                ev.preventDefault();
                cell.toggleFlag();
            });

            field.appendChild(cellDiv);
            this.cells.push(cell);
        }
    }
}

let game = new Game(80, 12);
game.generateMines();
