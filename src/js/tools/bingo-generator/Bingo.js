/**
 * You get to choose to dimensions of the BingoCard.
 * The center square is always free (marked).
 */
class BingoCard {

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.rows = this.generateSquares();
    }

    generateSquares() {
        let rows = Array(this.height);
        for (let r = 0; r < rows.length; r++) {
            rows[r] = [];
        }

        // Generate the numbers for each column.
        for (let c = 0; c < this.width; c++) {
            let column = this.generateNumsForColumn(c);
            // Insert the numbers into their respective rows.
            for (let r = 0; r < this.height; r++) {
                let isFree = this.isMiddle(r, c),
                    square = new BingoSquare(column[r], isFree);
                rows[r].push(square);
            }
        }

        return rows;
    }

    generateNumsForColumn(index) {
        const rangeSize = this.height * 3;
        const min = (rangeSize * index) + 1;

        let column = [];
        while (column.length < this.width) {
            let randInt = this.generateRandInt(rangeSize);
            randInt += min;
            if (column.indexOf(randInt) === -1) {
                column.push(randInt);
            }
        }

        return column;
    }

    /**
     * @param {number} max - Max is exclusive (i.e the number will never be equal to max).
     */
    generateRandInt(max) {
        return Math.floor(Math.random() * max);
    }

    isMiddle(r, c) {
        return Math.floor(this.height / 2) === r && Math.floor(this.width / 2) === c;
    }

    toggleSquare(rowIndex, colIndex) {
        let row = this.rows[rowIndex],
            square = row && row[colIndex];
        if (square) {
            square.toggle();
        }
    }
}


class BingoSquare {

    constructor(number, isFree) {
        this.number = number;
        this.isFree = isFree; // The middle square is a free slot.
        this.isMarked = isFree;
    }

    toggle() {
        if (!this.isFree) {
            this.isMarked = !this.isMarked;
        }
    }
}


export { BingoCard };
