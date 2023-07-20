let PlayerScore = 0;
let ComputerScore = 0;
//write the rounds
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    document.getElementById("text").textContent =
      "You've won rock beats scissors";
    PlayerScore += 1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.getElementById("text").textContent =
      "You've won scissors beats paper";
    PlayerScore += 1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("text").textContent = "You've won paper beats rock";
    PlayerScore += 1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  } else if (playerSelection == computerSelection) {
    document.getElementById("text").textContent = "tie";
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  } else if (playerSelection == "") {
    alert("invalid move");
  } else {
    document.getElementById(
      "text"
    ).textContent = `You've lost ${computerSelection} beats ${playerSelection}`;
    ComputerScore += 1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
}

// random computer choice
function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}
//decide who is winner
function decideWinner() {
  if (PlayerScore > ComputerScore) {
    alert(`You:${PlayerScore} computer:${ComputerScore} You won.`);
  } else if (PlayerScore == ComputerScore) {
    alert(`You:${PlayerScore} computer:${ComputerScore} tie.`);
  } else {
    alert(`You:${PlayerScore} computer:${ComputerScore} You lose.`);
  }
}
document.addEventListener("click", (img) => {
  let elementClass = img.target.className;
  let playerSelection = elementClass;
  console.log(elementClass);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);
  console.log(playRound(playerSelection, computerSelection));
});

// print out who is winner
console.log(decideWinner());
