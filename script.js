let PlayerScore = 0;
let ComputerScore = 0;
document.getElementById("try").style.visibility = "hidden";
//write the rounds
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    document.getElementById("text").textContent =
      "You've won rock beats scissors";
    PlayerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.getElementById("text").textContent =
      "You've won scissors beats paper";
    PlayerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("text").textContent = "You've won paper beats rock";
    PlayerScore += 1;
  } else if (playerSelection == computerSelection) {
    document.getElementById("text").textContent = "tie";
  } else if (playerSelection == "") {
    return;
  } else {
    document.getElementById(
      "text"
    ).textContent = `You've lost ${computerSelection} beats ${playerSelection}`;
    ComputerScore += 1;
  }
}

// random computer choice
function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}
//decide who is winner

document.addEventListener("click", (img) => {
  let elementClass = img.target.id;
  let playerSelection = elementClass;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  document.querySelector(".plascore").textContent = PlayerScore;
  document.querySelector(".compscore").textContent = ComputerScore;
  if (PlayerScore == 5 || ComputerScore == 5) {
    document.getElementById("rock").style.visibility = "hidden";
    document.getElementById("paper").style.visibility = "hidden";
    document.getElementById("scissors").style.visibility = "hidden";
    document.getElementById("try").style.visibility = "visible";
    if (PlayerScore == 5) {
      document.getElementById("text").textContent = "You've won";
    } else if (ComputerScore == 5) {
      document.getElementById("text").textContent = "Computer won";
    }
  }
});
const reload = document.getElementById("try");
reload.addEventListener("click", reloadpage);
function reloadpage() {
  location.reload();
}
// print out who is winner
