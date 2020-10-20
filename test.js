const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameField = document.querySelector('.game__field');

const filed = gameField.getBoundingClientRect();
let x1 = 0;
let y1 = 0;
let x2 = filed.width;
let y2 = filed.height;

const carrot = document.querySelectorAll('.carrot');
const carrotCount = carrot.length;


// 타이머와 스코어
function gameStart() {
    gameTimer.style.visibility = "visible";
    gameScore.style.visibility = "visible";

    let game = true;
    let icon = document.querySelector('.fas')
    if(game) {
        icon.classList.remove('fa-play')
        icon.classList.add('fa-stop')
        game = false;
    } else {
        icon.classList.remove('fa-stop')
        icon.classList.add('fa-play')
        game = true;
    }
}

// 당근 생성
function createCarrot() {
    let carrot = document.createElement('img')
    carrot.setAttribute('src', 'img/carrot.png')
    carrot.classList.add('carrot')
    gameField.appendChild(carrot)
}
// 벌레 생성
function createBug() {
    let bug = document.createElement('img')
    bug.setAttribute('src', 'img/bug.png')
    bug.classList.add('carrot')
    gameField.appendChild(bug)
}

function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

gameBtn.addEventListener('click',() => {
    // gameField.innerHTML = "";
    gameStart();
    createBug();
    createCarrot();
    // console.log(carrotCount)
});