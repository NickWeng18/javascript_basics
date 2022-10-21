function getComputerChoice() {
    var game = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * game.length);
    return game[computerChoice];
}

/*const playerPrompt = prompt("Choose rock, papers or scissors");

const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
const computerSelection = getComputerChoice();*/

    var win = false;
    var lose = false;
    var draw = false;

function playRound(playerSelection, computerSelection){
    win = false;
    lose = false;
    draw = false;


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

function game(){
    var winCount = 0;
    var loseCount = 0;

    for (let i = 0; i<5; i++){
        var playerPrompt = prompt("Choose rock, paper or scissors");
        var playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
        var computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        if (win == true){
            winCount = winCount + 1;
            alert("You win this round! " + playerSelection + " beats " + computerSelection);
        } else if (lose == true){
            loseCount = loseCount + 1;
            alert("You lose round! " + computerSelection +" beats " + playerSelection);
        }else if (draw == true){
            alert("You draw this round! you both picked " + playerSelection);
        } 
        else {
            alert("Invalid input! Please play round again")
            i = i - 1;
        }
     }

     if (winCount > loseCount){
        alert("You win the game! Scores: you: " + winCount + " - computer:" + loseCount);
    } else if (loseCount > winCount){
        alert("You lose the game! Scores: you:"  + winCount + "- computer:" + loseCount);
    } else{
        alert("You draw this game! Scores: you: " + winCount + "- computer:" + loseCount)
    }

}

alert("Welcome to Rock, Paper, Scissors! You are playing 5 rounds, highest score wins! Press Ok to proceed. ")

game()