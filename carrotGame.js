(() => {
  const playStop = document.querySelector(".play_stop");
  const timer = document.querySelector(".timer");
  const count = document.querySelector(".count");
  const result = document.querySelector(".result");
  const mainBody = document.querySelector(".mainBody");

  let game = false;

  function onOff() {
    if (game) {
      console.log("f");
      playStop.innerHTML = `
            <i class="fas fa-play"></i>
            `;
      game = false;
    } else {
      playStop.innerHTML = `
            <i class="fas fa-stop"></i>
            `;
      console.log("t");
      game = true;
    }
  }

  const carrotImg = document.createElement("img");
  carrotImg.setAttribute("src", "img/carrot.png");
  carrotImg.setAttribute("class", "carrot");
  const bugImg = document.createElement("img");
  bugImg.setAttribute("src", "img/bug.png");
  bugImg.setAttribute("class", "bug");

  function gameField() {
    mainBody.appendChild(bugImg);
    mainBody.appendChild(carrotImg);
  }

  playStop.addEventListener("click", () => {
    onOff();
    gameField();
  });
})();
