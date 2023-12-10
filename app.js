let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
//let newGame = document.querySelector(".newGame");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enable();
};

const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    //console.log("box was clicked");
    if (turnO == true) {
      box.innerHTML = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerHTML = "X";
      turnO = true;
      box.disabled = true;
    }
    checkwinner();
  });
});

reset.addEventListener("click", (e) => {
  document.querySelectorAll("").innerHTML = "";
});

const checkwinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);

    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        document.querySelector(".game").innerHTML =
          pos1Val + "<span> is the winner </span>";
        //announcement = true
        let newGame = (document.querySelector(".reset").innerHTML = "New Game");
        // console.log(winner);
        newGame.addEventListener("click", () => {
          //announcement = false
        });
      }
    }
  }
};

reset.addEventListener("click", resetGame);
