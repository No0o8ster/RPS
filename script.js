getComputerChoice

let computerscore = 0
let playerscore = 0
let Winner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
    Winner = 'tie'
}

    if (playerSelection === "Rock" && computerSelection === "Paper")||
  (playerSelection === "Paper" && computerSelection === "Scissors")||
  (playerSelection === "Scissors" && computerSelection === "rock"){
    ++computerscore
    Winner = 'Computer'
  }

    if (playerSelection === "Rock" && computerSelection === "Scissors")||
    (playerSelection === "Paper" && computerSelection === "Rock")||
    (playerSelection === "Scissors" && computerSelection === "Paper"){
        ++playerscore
        Winner = 'player'
    }

}

   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));