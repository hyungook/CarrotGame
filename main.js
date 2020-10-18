"use strict";
const CARROT_size = 80;
const filed = document.querySelector(".mainBody");
const filedRect = filed.getBoundingClientRect();

function initGame() {
  //벌레와 당근을 생성한뒤 filed에 추가해줌

  console.log(filedRect);
  additem("carrot", 5, "img/carrot.png");
  additem("bug", 5, "img/bug.png");
}

function additem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = filedRect.width - CARROT_size;
  const y2 = filedRect.height - CARROT_size;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    filed.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

initGame();
