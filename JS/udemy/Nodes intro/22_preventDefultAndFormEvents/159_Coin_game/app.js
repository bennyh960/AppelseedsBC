function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
// understand why extractPos need return 0 if not pos due to the position in js is not defined
// avatar.style.position = "absolute";
// avatar.style.top = "200px";
// avatar.style.left = "100px";

window.addEventListener("keypress", function (e) {
  const currRightLeft = extractPos(avatar.style.left);
  const currTopBottom = extractPos(avatar.style.top);

  if (e.key === "w" && avatar.offsetTop > 50) {
    avatar.style.top = `${currTopBottom - 50}px`;
  }
  if (e.key === "s") {
    avatar.style.top = `${currTopBottom + 50}px`;
  }
  if (e.key === "d") {
    avatar.style.transform = "scaleX(1)";
    avatar.style.left = `${currRightLeft + 50}px`;
  }
  if (e.key === "a") {
    avatar.style.transform = "scaleX(-1)";
    avatar.style.left = `${currRightLeft - 50}px`;
  }

  if (isTouching(avatar, coin)) moveCoin();
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
