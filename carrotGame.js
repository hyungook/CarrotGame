// (() => {
//   const playStop = document.querySelector(".play_stop");
//   const timer = document.querySelector(".timer");
//   const count = document.querySelector(".count");
//   const result = document.querySelector(".result");
//   const mainBody = document.querySelector(".mainBody");

//   let game = false;

//   function onOff() {
//     if (game) {
//       console.log("f");
//       playStop.innerHTML = `
//             <i class="fas fa-play"></i>
//             `;
//       game = false;
//     } else {
//       playStop.innerHTML = `
//             <i class="fas fa-stop"></i>
//             `;
//       console.log("t");
//       game = true;
//     }
//   }

//   let cnt = 10;
//   function countDown() {
//     // if (cnt == 0) {
//     //   clearInterval(s);
//     // }
//     document.querySelector(".timer").innerHTML = `00:${cnt}`;
//     cnt--;
//     let s = setInterval(countDown, 1000);
//   }

//   const carrotImg = document.createElement("img");
//   carrotImg.setAttribute("src", "img/carrot.png");
//   carrotImg.setAttribute("class", "carrot");
//   const bugImg = document.createElement("img");
//   bugImg.setAttribute("src", "img/bug.png");
//   bugImg.setAttribute("class", "bug");

//   function gameField() {
//     for (i = 0; i < 10; i++) {
//       mainBody.append(bugImg);
//       mainBody.append(carrotImg);
//     }
//   }

//   playStop.addEventListener("click", () => {
//     // onOff();
//     gameField();
//     countDown();
//   });
// })();
