alert("Game for 2 players");
alert("The first one to win 3 times will be the CHAMPION");
alert('Valid Selections: "rock", "paper", "scissors"');

const p1name = prompt("Write your name player 1");
const p2name = prompt("Write your name player 2");

let p1score = 0;
let p2score = 0;

const validSelections = ["rock", "paper", "scissors"];

while (p1score !== 3 && p2score !== 3) {
  let p1selection = prompt(p1name + " make your selection");
  let p2selection = prompt(p2name + " make your selection");

  if (
    validSelections.includes(p1selection) &&
    validSelections.includes(p2selection)
  ) {
    alert("Analyzing the result...");
    if (
      (p1selection === validSelections[0] &&
        p2selection === validSelections[2]) ||
      (p1selection === validSelections[1] &&
        p2selection === validSelections[0]) ||
      (p1selection === validSelections[2] && p2selection === validSelections[1])
    ) {
      p1score += 1;
    } else if (
      (p2selection === validSelections[0] &&
        p1selection === validSelections[2]) ||
      (p2selection === validSelections[1] &&
        p1selection === validSelections[0]) ||
      (p2selection === validSelections[2] && p1selection === validSelections[1])
    ) {
      p2score += 1;
    } else {
      alert("IT'S A TIE!!");
    }
    alert(`score --> ${p1name}: ${p1score} vs ${p2name}: ${p2score}`);
  } else {
    alert("Make a valid selection");
  }
}

if (p1score === 3) alert(`${p1name} you are the CHAMPION!!`);
else alert(`${p2name} you are the CHAMPION!!`);
