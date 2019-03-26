/**
 * StrNumTokens separates the numeric parts from the non-numeric parts of strings.
 *
 * @example
 * let tokens = StrNumTokens("2 birds, 1 stone");
 * tokens.scaleNumsBy(10);
 * let scaledStr = tokens.toString(); // "20 birds, 10 stone"
 */
class StrNumTokens {

    constructor(string) {
        this.tokens = this.parseString(string);
        this.forEach = this.tokens.forEach.bind(this.tokens);
        this.map = this.tokens.map.bind(this.tokens);
    }


    parseString(string) {
        const numRegex = /-?\d+([\.\/]\d+)?/g;
        const tokens = [];

        // Go through each number...
        let currNum = numRegex.exec(string), // Note: exec() returns a special object.
            prevStrIndex = 0;
        while (currNum) {
            let prevStr = string.substring(prevStrIndex, currNum.index),
                num = currNum;
            if (currNum.index !== 0) {
                tokens.push(prevStr);
            }
            tokens.push(this.strToNum(String(currNum[0])));
            prevStrIndex = currNum.index + String(currNum[0]).length;
            currNum = numRegex.exec(string);
        }

        // Trailing string.
        let trailingString = string.substring(prevStrIndex, string.length);
        if (trailingString.length > 0) {
            tokens.push(trailingString);
        }

        return tokens;
    }

    strToNum(str) {
        const indexOfSlash = str.indexOf("/");
        if (indexOfSlash > 0) {
            let numerator = str.substring(0, indexOfSlash),
                denominator = str.substring(indexOfSlash + 1);
            return Number(numerator) / Number(denominator);
        }
        return Number(str);
    }

    scaleNumsBy(x) {
        this.tokens.forEach((token, index) => {
            if (typeof token === "number") {
                this.tokens[index] = token * x;
            }
        });
        return this;
    }

    toString() {
        return this.tokens.join("");
    }
}

export { StrNumTokens };
