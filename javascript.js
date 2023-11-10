function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice === 1){
        return "rock";
    }else if(choice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection){
    computerSelection.toLowerCase();
if(playerSelection === computerSelection){
        return "tie";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Paper";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    }else {
        return "You Lose! Rock beats Paper";
    }
}
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));