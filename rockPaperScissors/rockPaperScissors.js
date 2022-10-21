function getComputerChoice() {
    var game = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * game.length);
    return game[computerChoice];
}

const playerPrompt = prompt("Choose rock, papers or scissors");

const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
const computerSelection = getComputerChoice();

var win = false;
var lose = false;
var draw = false;

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock"){
           return draw = true;
        } else if (computerSelection == "Scissors"){
            return win = true;
        } else {
            return lose = true;
        }

    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock"){
            return lose - true;
        } else if (computerSelection == "Scissors"){
            return draw = true;
        } else {
            return win = true;
        }

    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock"){
            return win = true;
        } else if (computerSelection == "Scissors"){
            return lose = true;
        } else {
            return draw = true;
        }
        
    } else return "Please select a valid input"
}

playRound(playerSelection, computerSelection);

if (win == true){
    alert("You win! " + playerSelection + " beats " + computerSelection)
} else if (false == true){
    alert("You lose! " + computerSelection + " beats " + playerSelection)
}else {
    alert("You draw! you both picked " + playerSelection)
}

// function game(){
//     for (let i = 0; i,5; i++){

//     }
// }