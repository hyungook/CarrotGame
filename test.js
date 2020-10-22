const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameField = document.querySelector('.game__field');

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
        game = false;
    } else {
        icon.classList.remove('fa-stop')
        icon.classList.add('fa-play')
        // console.log(game);
        game = true;
    }
    // console.log(carrotCount)
    
}
const filed = gameField.getBoundingClientRect();
carrot__size = 80;
let x1 = 0;
let y1 = 0;
let x2 = filed.width - carrot__size;
let y2 = filed.height - carrot__size;

// 당근 생성
// function createCarrot() {

//     let x = getRandom(x1,x2);
//     let y = getRandom(y1,y2);

//     for(i=0; i < 5; i++) {
//         let carrot = document.createElement('img')
//         carrot.setAttribute('src', 'img/carrot.png')
//         carrot.classList.add('carrot')
//         gameField.appendChild(carrot)
//         carrot.style.top = `${y}px`;
//         carrot.style.left = `${x}px`;
//     }
// }
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
// function createBug() {
    
//     let x = getRandom(x1,x2);
//     let y = getRandom(y1,y2);

//     for(i=0; i < 5; i++) {
//         let bug = document.createElement('img')
//         bug.setAttribute('src', 'img/bug.png')
//         bug.classList.add('bug')
//         gameField.appendChild(bug)
//         bug.style.top = `${y}px`;
//         bug.style.left = `${x}px`;
//     }
// }
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
}

// 게임 타이머
let timer = 9;
function gameTimerStart() {
    gameTimer.innerHTML = `00:10`;
    let GameTime = setInterval(function() {
            if(!game) {
                if(timer >= 0) {
                    gameTimer.innerHTML = `00:0${timer}`;
                } else {
                    gameTimer.innerHTML = `00:${timer}`;
                }
                timer--;
                // console.log(aa)
            } else {
                clearInterval(GameTime);
            }
        },1000)
GameTime;
    
    // if(timer == 0) {
    //     // clearInterval(gameTimer);
    // } 


    // for(timer; timer > 0 ; timer--) {
    //     console.log(timer)
    // }

    // if(timer > 0) {
    //     let aa = setInterval(function() {
    //         console.log(timer)
    //     },1000)
    // } else {

    // }
    
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



