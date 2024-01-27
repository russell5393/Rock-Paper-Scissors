function getComputerChoice(){
    let randVal = Math.floor(Math.random() * 3)+1;
    if(randVal == 1){
        return "Rock";
    }
    else if(randVal == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getUserChoice(){
    let userInput = prompt("Enter either Rock, Paper, or Scissors to begin playing")
    if(userInput.toLowerCase() == "rock"){
        return "Rock";
    }
    else if(userInput.toLowerCase() == "paper"){
        return "Paper";
    }
    else if(userInput.toLowerCase() == "scissors"){
        return "Scissors";
    }
    else{
        return "Error";
    }
}

function gamePlay(computerChoice, userChoice){
    if (computerChoice == userChoice){
        return "You Tie"
    }
    else if (computerChoice == "Paper" && userChoice == "Scissors"){
        return "You Win"
    }
    else if (computerChoice == "Rock" && userChoice == "Paper"){
        return "You Win"
    }
    else if (computerChoice == "Scissors" && userChoice == "Rock"){
        return "You Win"
    }
    else if (computerChoice == "Scissors" && userChoice == "Paper"){
        return "Computer Wins"
    }
    else if (computerChoice == "Paper" && userChoice == "Rock"){
        return "Computer Wins"
    }
    else if (computerChoice == "Rock" && userChoice == "Scissors"){
        return "Computer Wins"
    }
}

//Enter a for Loop to play best 3 out of 5 
//Enable a score to be kept 
//Send the output text to the HTML Sreen 

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let playGame = gamePlay(computerChoice, userChoice);
console.log("You picked "+ userChoice + ", the computer chose "+ computerChoice + ".\n"+ playGame);