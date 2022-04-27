import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeInterection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You loose. Press ok to restart.")) {
      window.location = "./";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  // console.log(currentTime, secondSinceLastRender, lastRenderTime);
  // console.log("render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath(params) {
  gameOver = outSideGrid(getSnakeHead()) || snakeInterection();
}
