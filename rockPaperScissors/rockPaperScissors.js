function getComputerChoice() {
    var game = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * game.length);
    return game[computerChoice];
}

const playerPrompt = prompt("Choose rock, papers or scissors");

const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection = "Rock") {
        if (computerSelection = "Rock"){
            alert("Draw! you both picked " + computerSelection);
        } else if (computerSelection = "Scissors"){
            alert("You Win! " + playerSelection + " beats " + computerSelection);
        } else {
            alert("You Lose! " + computerSelection + " beats " + playerSelection);
        }

    } else if (playerSelection = "Scissors") {
        if (computerSelection = "Rock"){
            alert("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (computerSelection = "Scissors"){
            alert("Draw! you both picked " + computerSelection);
        } else {
            alert("You Win! " + playerSelection + " beats " + computerSelection);
        }

    } else if (playerSelection = "Paper") {
        if (computerSelection = "Rock"){
            alert("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection = "Scissors"){
            alert("You Lose! " + computerSelection + " beats " + playerSelection);
        } else {
            alert("Draw! you both picked " + computerSelection);
        }
        
    } else prompt("Please select a valid input")
}