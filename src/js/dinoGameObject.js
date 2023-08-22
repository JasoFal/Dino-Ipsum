export default class DinoGameObject {
  constructor(array) {
    this.dinoArray = array.toLowerCase().split("");
    this.letterArray = null;
    this.resultsArray = Array(this.dinoArray.length).fill("_");
    this.failedAttempts = 0;
    this.wordTrue = false;
    this.gameLoss = false;
    this.gameWin = false;
    this.previousAttempts = [];
    this.letterTrue = null;
  }

  checkLetterVsDino() {
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

  updateAttemptsUsed() {
    if (this.wordTrue == false) {
      this.failedAttempts += 1;
      if (this.failedAttempts === 10) {
        this.gameLoss = true;
      }
    }
  }

  isPreviousGuess() {
    let letterString = this.letterArray.toString();
    if (this.previousAttempts.includes(letterString)) {
      return true;
    } else {
      this.previousAttempts.push(letterString);
      return false;
    }
  }
}