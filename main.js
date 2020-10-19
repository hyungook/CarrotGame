"use strict";
const CARROT_size = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const filed = document.querySelector(".game__field");
const filedRect = filed.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button')
const gameTimer = document.querySelector('.game__timer')
const gameScore = document.querySelector('.game__score')

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', () => {
  // console.log('log')
  if(started) {
    stopGame();
  }else {
    startGame();
  }
  started = !started;
})

function startGame() {
  initGame();
  showStopButton();
  showTimerScore();
}

function showTimerScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function stopGame() {

}

function showStopButton() {
  const icon = gameBtn.querySelector('.fa-play');
  icon.classList.add('fa-stop'); // 점 빼자
  icon.classList.remove('fa-play');
  console.log(icon)
}


function initGame() {
  //벌레와 당근을 생성한뒤 filed에 추가해줌

  // console.log(filedRect);
  additem("carrot", CARROT_COUNT, "img/carrot.png");
  additem("bug", BUG_COUNT, "img/bug.png");
  
  // 당근 개수 count에 표시 
  // carrotCount();
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


// function carrotCount() {
//   const carrot = document.querySelectorAll('.carrot')
//   const count = document.querySelector('.count')
//   console.log(carrot.length)
//   console.log(count.innerHTML)

//   count.innerHTML = `${carrot.length}`;

// }



