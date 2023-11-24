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
   let CS = computerSelection.toLowerCase();
   let PS = playerSelection.toLowerCase();
  
if(PS === CS){
        return "tie";
    }else if(PS == "rock" && CS == "scissors"){
        return "win";
    }else if(PS == "paper" && CS == "rock"){
        return "win";
    }else if(PS == "paper" && CS == "scissors"){
        return "lose";
    }else if(PS == "scissors" && CS == "rock"){
        return "lose";
    }else if(PS == "scissors" && CS == "paper"){
        return "win";
    }else{
        return "lose";
    }
}

function game(playerSelection, computerSelection){
    let PlayerScore = 0;
    let ComputerScore = 0;
    for (let i = 0; i < 5; i++){
        let result = playRound(playerSelection, computerSelection);
        
        if (result === "tie") {
         i--;
        } else if (result === "win"){
            PlayerScore ++;
        } else{
            ComputerScore ++;
        }
    }
    
    if(PlayerScore > ComputerScore){
        return "Player wins!"
    }else if (PlayerScore > ComputerScore){
        return "Computer wins!"
    }else{
        return "Tie."
    }
}
const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(game(playerSelection,computerSelection));
