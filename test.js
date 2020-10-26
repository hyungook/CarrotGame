const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameField = document.querySelector('.game__field');
const carrot = document.querySelector('.carrot');
const result = document.querySelector('.result');
const resultResult = document.querySelector('.result__result');
const resultBtn = document.querySelector('.result__button');

// 타이머와 스코어
// 게임 상태 수정
let game = true;
function gameStart() {
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
    timer = 9;
    let GameTime = setInterval(function() {
            if(!game) {
                if(timer >= 0) {
                    gameTimer.innerHTML = `00:0${timer}`;
                } else {
                    clearInterval(GameTime);
                        console.log('타이머 0이다')
                        // resultResult.innerHTML="YOU WON";
                        result.classList.remove('hidden')
                        game = true;
                }
                timer--;
                // console.log(aa)
            } else {
                // resultResult.innerHTML="REPLAY?";
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
        console.log('remove - ok')
        elem.remove(this);
    }
    carrotCount();
    bugCount();
}

gameField.addEventListener('click', remove__carrot);

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
        resultResult.innerHTML="YOU WON";
        result.classList.remove('hidden')
        game = true;
    }else {
        resultResult.innerHTML="REPLAY?";
    }
}

// 벌레 개수
// 벌레 클릭 시 게임 종료
function bugCount() {
    const bug = document.querySelectorAll('.bug');
    const bugCount = bug.length;

    if(bugCount < 5) {
        console.log('bug bug')
        resultResult.innerHTML="REPLAY?";
        result.classList.remove('hidden')
        game = true;
    } else {
        resultResult.innerHTML="YOU WON";
        return;
    }


}

gameBtn.addEventListener('click',() => {
    gameField.innerHTML = "";
    gameStart();
    // console.log(carrotCount)
    for(i=0; i < 5; i++) {
        createCarrot();
    }
    for(i=0; i < 5; i++) {
        createBug();
    }
    carrotCount();
    gameTimerStart();
});


resultBtn.addEventListener('click',() => {
    gameField.innerHTML = "";
    gameStart();
    // console.log(carrotCount)
    for(i=0; i < 5; i++) {
        createCarrot();
    }
    for(i=0; i < 5; i++) {
        createBug();
    }
    carrotCount();
    bugCount();
    gameTimerStart();
});
