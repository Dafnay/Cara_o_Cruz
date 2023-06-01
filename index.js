let face = 0;
let cross = 0;
const coin = document.querySelector(".coin");
const start = document.querySelector("#startGame");
const reset = document.querySelector("#reset");

start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);

function startGame() {
  start.disabled = true;
  coin.style.animation = "none";

  const i = Math.floor(Math.random() * 2);

  coin.addEventListener("animationend", onAnimationEnd);

  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-face 3s forwards";
    }, 100);
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-cross 3s forwards";
    }, 100);
  }
}

function onAnimationEnd(event) {
  if (event.target !== coin) return;

  coin.removeEventListener("animationend", onAnimationEnd);

  if (coin.style.animation.includes("spin-face")) {
    face++;
  } else {
    cross++;
  }

  updateStats();
  disableButton();
}

function resetGame() {
  coin.style.animation = "none";
  face = 0;
  cross = 0;
  updateStats();
  disableButton();
}

function updateStats() {
  document.querySelector("#face-count").textContent = `CARA - ${face}`;
  document.querySelector("#cross-count").textContent = `CRUZ - ${cross}`;
}

function disableButton() {
  setTimeout(() => {
    start.disabled = false;
  }, 1000);
}