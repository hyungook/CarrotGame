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
// 개수 추가가 안됨
const carrotCount = carrot.length;


// 타이머와 스코어
// 게임 상태 수정
let game = true;
function gameStart() {
    gameTimer.style.visibility = "visible";
    gameScore.style.visibility = "visible";

    let icon = document.querySelector('.fas')
    if(game) {
        icon.classList.remove('fa-play')
        icon.classList.add('fa-stop')
        console.log(game);
        game = false;
    } else {
        icon.classList.remove('fa-stop')
        icon.classList.add('fa-play')
        console.log(game);
        game = true;
    }

    // console.log(carrotCount)
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
    bug.classList.add('bug')
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