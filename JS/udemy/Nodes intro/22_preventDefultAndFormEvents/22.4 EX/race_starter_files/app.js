const p1 = document.querySelectorAll("#player1-race td");
const p2 = document.querySelectorAll("#player2-race td");

// winner decleration
const announcement = document.createElement("div");
const btn = document.createElement("button");

announcement.style.width = "300px";
announcement.style.border = "1px solid black";
announcement.style.margin = "auto";
announcement.style.textAlign = "center";

const msgFunc = (playerNum) => {
  announcement.innerText = `\nPlayer ${playerNum} win.\nDo you want play again?`;
  announcement.style.fontSize = "2rem";
  announcement.style.height = "200px";
  announcement.style.background = "green";
  btn.style.display = "block";
};

const resetMsg = () => {
  announcement.innerText = "\nPlayer 1 key : d \nPlayer 2 key : l";
  announcement.style.fontSize = "1.3rem";
  announcement.style.height = "100px";
  announcement.style.background = "whitesmoke";
  btn.style.display = "none";
};

// announcement.style.display = "flex";

document.body.appendChild(announcement);
btn.innerHTML = "Yes";
btn.style.margin = "5px 49%";
btn.style.position = "relative";
btn.style.top = "-30px";
document.body.append(btn);

// game variables
let counter1 = 0;
let counter2 = 0;
let isFinish = false;

resetMsg();
// game logic
window.addEventListener("keyup", ({ key }) => {
  if (!isFinish) {
    if (key === "d" && counter1 < p1.length - 1) {
      p1[counter1 + 1].classList.add("active");
      p1[counter1].classList.remove("active");
      counter1++;
    }

    if (counter1 === p1.length - 1) {
      isFinish = true;
      msgFunc(1);
    }
    if (key === "l" && counter2 < p2.length - 1) {
      p2[counter2 + 1].classList.add("active");
      p2[counter2].classList.remove("active");
      counter2++;
    }

    if (counter2 === p2.length - 1) {
      //   console.log("Player 2 win.");
      isFinish = true;
      msgFunc(2);
    }
  }
});

btn.addEventListener("click", () => {
  isFinish = false;
  // counter1 = 0;
  p2[counter2].classList.remove("active");
  p2[0].classList.add("active");
  counter2 = 0;
  p1[counter1].classList.remove("active");
  p1[0].classList.add("active");
  counter1 = 0;
  resetMsg();
});
