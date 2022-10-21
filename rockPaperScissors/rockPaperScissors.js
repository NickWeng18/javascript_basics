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
    alert("You lose! " + computerSelection +" beats " +playerSelection)
}else {
    alert("You draw! you both picked " + playerSelection)
}

function game(){
    var winCount = 0;
    var loseCount = 0;

    for (let i = 0; i,5; i++){
        var playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
        var computerSelection = getComputerChoice();
        var win = false;
    var lose = false;
    var draw = false;

        playRound(playerSelection, computerSelection)
        if (win == true){
            winCount = winCount + 1;
            alert("You win this round! " + playerSelection + " beats " + computerSelection);
        } else if (false == true){
            loseCount = loseCount + 1;
            alert("You lose round! " + computerSelection +" beats " + playerSelection);
        }else {
            alert("You draw this round! you both picked " + playerSelection);
        }

        if (winCount > loseCount){
            alert("You win the game! Scores: you:" + winCount + " - computer:" + loseCount);
        } else if (loseCount > winCount){
            alert("You lose the game! Scores: you:" + winCount + "- computer:" + loseCount);
        } else{
            alert("You draw this game! Scores: you:" + winCount + "- computer:" + loseCount)
        }
     }


}