const alphabeta = "abcdefghijklmnopqrstuvwxyz";
let randomCharacter = alphabeta[Math.floor(Math.random() * alphabeta.length)];
// const randomCharacter = "a";

const codedLayout = document.querySelector(".code");
const msg = document.querySelector(".msg");
const presentedList = document.querySelector(".guess-list");
const yesBtn = document.querySelector("button");
yesBtn.style.display = "none";

let guessedList = [];
let noteUser = "";
let isGuessed = false;

const msgUser = (adress, massage, color) => {
  adress.textContent = massage;
  adress.style.color = color;
};

window.addEventListener("keypress", ({ key }) => {
  key = key.toLocaleLowerCase();
  // console.log("x");
  if (!isGuessed) {
    if (guessedList.includes(key)) {
      noteUser = `${key} already been guesed!`;
      msgUser(msg, noteUser, "red");
    } else if (key === randomCharacter) {
      noteUser = "Right letter!";
      msgUser(msg, noteUser, "green");
      codedLayout.textContent = key;
      isGuessed = true;
      msg.nextElementSibling.textContent = "Would you like to play again?";
      msg.nextElementSibling.style.fontSize = "18px";
      presentedList.textContent = "";
      yesBtn.style.display = "block";
    } else if (!alphabeta.includes(key.toLowerCase())) {
      noteUser = "Please enter a valid letter.";
      msgUser(msg, noteUser, "red");
    } else {
      guessedList.push(key);
      noteUser = "Nope, wrong letter";
      presentedList.textContent = guessedList.join(",");
      msgUser(msg, noteUser, "red");
    }
  }
});

yesBtn.addEventListener("click", () => {
  isGuessed = false;
  guessedList = [];
  yesBtn.style.display = "none";
  msg.nextElementSibling.textContent = "key Guessed";
  msg.nextElementSibling.style.fontSize = "22px";
  randomCharacter = alphabeta[Math.floor(Math.random() * alphabeta.length)];
  codedLayout.textContent = "?";
  noteUser = "Guess a letter";
  msgUser(msg, noteUser, "black");
});
