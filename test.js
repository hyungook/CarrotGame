const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameField = document.querySelector('.game__field');
const carrot = document.querySelector('.carrot');
const result = document.querySelector('.result');
const resultResult = document.querySelector('.result__result');
const resultBtn = document.querySelector('.result__button');


// Sound (엘린님 강의)
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const gameWinSound = new Audio('./sound/game_win.mp3');


// 타이머와 스코어
// 게임 상태 수정
let game = true;
function gameStart() {
    playSound(bgSound);
    gameTimer.style.visibility = "visible";
    gameScore.style.visibility = "visible";

    let icon = document.querySelector('.fas')
    // let game = true;
    if(game) {
        icon.classList.remove('fa-play')
        icon.classList.add('fa-stop')
        // console.log(game);
        result.classList.add('hidden')
        game = false;
    } else {
        icon.classList.remove('fa-stop')
        icon.classList.add('fa-play')
        stopSound(bgSound);
        playSound(alertSound);
        // console.log(game);
        
        result.classList.remove('hidden')
        game = true;
    }
    // console.log(carrotCount)
}

// 게임 타이머
// 게임 정지가 되면 innerHtml = ""
let timer = 9;
function gameTimerStart() {
    // gameTimer.innerHTML = `00:10`;
    gameBtn.style.visibility="visible";
    timer = 9;
    let GameTime = setInterval(function() {
            if(!game) {
                if(timer >= 0) {
                    gameTimer.innerHTML = `00:0${timer}`;
                } else {
                    clearInterval(GameTime);
                        console.log('타이머 0이다')
                        playSound(alertSound);
                        resultResult.innerHTML="YOU LOST 😰";
                        result.classList.remove('hidden')
                        game = true;
                }
                timer--;
                // console.log(aa)
            } else {
                // resultResult.innerHTML="REPLAY?";
                gameBtn.style.visibility="hidden";
                gameField.innerHTML = "";
                clearInterval(GameTime);
            }
        },1000)

GameTime;
}

// 랜덤 포지션을 위한 코드
const filed = gameField.getBoundingClientRect();
carrot__size = 80;
let x1 = 0;
let y1 = 0;
let x2 = filed.width - carrot__size;
let y2 = filed.height - carrot__size;

// 당근 생성
function createCarrot() {

    let x = getRandom(x1,x2);
    let y = getRandom(y1,y2);

    let carrot = document.createElement('img')
    carrot.setAttribute('src', 'img/carrot.png')
    carrot.classList.add('carrot', 'item')
    gameField.appendChild(carrot)
    carrot.style.top = `${y}px`;
    carrot.style.left = `${x}px`;
}

// 벌레 생성
function createBug() {
    
    let x = getRandom(x1,x2);
    let y = getRandom(y1,y2);

    let bug = document.createElement('img')
    bug.setAttribute('src', 'img/bug.png')
    bug.classList.add('bug', 'item')
    gameField.appendChild(bug)
    bug.style.top = `${y}px`;
    bug.style.left = `${x}px`;
}

//당근 삭제!
let removeCarrot;
function remove__carrot(e) {
    let elem = e.target;
    console.log(elem);
    // elem.remove(this);
    if(e.target == gameField) {
        // elem = null;
        console.log('remove - no')
        return;
    } else {
        // elem = e.target;
        playSound(carrotSound);
        console.log('remove - ok')
        elem.remove(this);
    }
    carrotCount();
    bugCount();
}

gameField.addEventListener('click', remove__carrot);

// 벌레 개수
// 벌레 클릭 시 게임 종료
function bugCount() {
    const bug = document.querySelectorAll('.bug');
    const bugCount = bug.length;

    if(bugCount < 10) {
        console.log('bug bug')
        // resultResult.innerHTML="REPLAY?";
        playSound(alertSound);
        playSound(bugSound);
        resultResult.innerHTML="YOU LOST 😰";
        result.classList.remove('hidden')
        gameBtn.style.visibility="hidden";
        game = true;
    } else {
        resultResult.innerHTML="YOU WON";
        return;
    }
}

// 소리 재생 함수
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
// 소리 정지 함수
function stopSound(sound) {
    sound.pause();
}

// 랜덤
function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// 당근 개수
function carrotCount() {
    const carrot = document.querySelectorAll('.carrot');
    // 개수 추가가 안됨
    const carrotCount = carrot.length;
    gameScore.innerHTML = carrotCount;

    if(carrotCount == 0) {
        console.log('0이다')
        playSound(gameWinSound);
        stopSound(bgSound);
        resultResult.innerHTML="YOU WON 🎉";
        result.classList.remove('hidden')
        game = true;
    }else {
        resultResult.innerHTML="REPLAY?";
    }
}

gameBtn.addEventListener('click',() => {
    gameField.innerHTML = "";
    gameStart();
    // console.log(carrotCount)
    for(i=0; i < 10; i++) {
        createCarrot();
    }
    for(i=0; i < 10; i++) {
        createBug();
    }
    carrotCount();
    gameTimerStart();
});

resultBtn.addEventListener('click',() => {
    gameField.innerHTML = "";
    gameStart();
    // console.log(carrotCount)
    for(i=0; i < 10; i++) {
        createCarrot();
    }
    for(i=0; i < 10; i++) {
        createBug();
    }
    carrotCount();
    bugCount();
    gameTimerStart();
});