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

export {Cell}