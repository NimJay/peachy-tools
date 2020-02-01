import { getRandomWords } from "./CodenamesWords.js";


class Codenames {

    constructor() {
        this.board = this.generateBoard();
    }

    generateBoard() {
        const words = getRandomWords(25);
        const board = [];

        for (let r = 0; r < 5; r++) {
            board[r] = [ null, null, null, null, null ];
        }

        for (let i = 0; i < 25; i++) {
            let r = Math.floor(i / 5); // 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, ..., 4, 4, 4, 4, 4
            let c = i % 5;             // 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, ..., 0, 1, 2, 3, 4
            board[r][c] = new BoardSlot(words[i]);
        }

        return board;
    }
}


class BoardSlot {

    constructor(word) {
        this.word = word;
        this.coveredBy = null; // "Red", "Blue", "Bystander"
    }

}


export { Codenames };
