export default class DinoGameObject {
  constructor(array) {
    this.dinoArray = array.toLowerCase().split("");
    this.letterArray = null;
    this.resultsArray = Array(this.dinoArray.length).fill("_");
    this.failedAttempts = 0;
    this.wordTrue = false;
    this.gameLoss = false;
    this.gameWin = false;
    this.attemptedWords = [];
  }

  checkLetterVsDino() {
    console.log(this.dinoArray);
    this.dinoArray.forEach((char, index) => {
      if (this.letterArray.includes(char)) {
        this.resultsArray[index] = char;
        this.wordTrue = true;
      } else {
        this.wordTrue = false;
      }
    });
    if (!this.resultsArray.includes("_")) {
      this.gameWin = true;
    }
  }

  noMatch() {
    if (this.wordTrue == false) {
      this.failedAttempts += 1;
      if (this.failedAttempts === 10) {
        this.gameLoss = true;
      }
    }
  }
}

// win condition options:
// 1. Recombine array and compare string.
// 2. 