function getComputerChoice() {
    var game = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * game.length);
    return game[computerChoice];
}

const playerPrompt = prompt("Choose rock, papers or scissors");

const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock"){
           return "Draw! you both picked " + computerSelection;
        } else if (computerSelection == "Scissors"){
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock"){
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else if (computerSelection == "Scissors"){
            return "Draw! you both picked " + computerSelection;
        } else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }

    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock"){
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else if (computerSelection == "Scissors"){
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "Draw! you both picked " + computerSelection;
        }
        
    } else return "Please select a valid input"
}

alert(playRound(playerSelection, computerSelection))