let PlayerScore = 0;
let ComputerScore = 0;

//write the rounds
function playRound(playerSelection, computerSelection) {
  if(playerSelection == "rock" && computerSelection == "scissors"){
    alert("You've won rock beats scissors");
    PlayerScore +=1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
  else if(playerSelection == "scissors" && computerSelection == "paper"){
    alert("You've won scissors beats paper")
    PlayerScore +=1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
  else if(playerSelection == "paper" && computerSelection == "rock"){
    alert("You've won paper beats rock")
    PlayerScore +=1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
  else if(playerSelection == computerSelection){
    alert("tie")
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
  else{
    alert(`You've lost ${computerSelection} beats ${playerSelection}. `)
    ComputerScore += 1;
    alert(`You:${PlayerScore} computer:${ComputerScore}`);
  }
}


// random computer choice
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}
//decide who is winner
function decideWinner(){
    if(PlayerScore > ComputerScore){
        alert(`You:${PlayerScore} computer:${ComputerScore} You won.`);
    }
    else if (PlayerScore == ComputerScore){
        alert(`You:${PlayerScore} computer:${ComputerScore} tie.`);
    }
    else{
        alert(`You:${PlayerScore} computer:${ComputerScore} You lose.`);
    }
}
// loop through five times
for (let step = 0; step < 5; step++) {
  const playerSelection = prompt("Rock Paper or Scissors?");
  const computerSelection = getComputerChoice();
  playerSelection.toLowerCase();
  console.log(computerSelection)
  console.log(playerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
// print out who is winner
console.log(decideWinner());