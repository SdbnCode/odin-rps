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

function playRound(){
   let CS = getComputerChoice();
   let PS = prompt().toLowerCase();
   console.log(CS)
   console.log(PS)
if(PS == CS){
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

function game(){
    let PlayerScore = 0;
    let ComputerScore = 0;

    for (let i = 0; i < 5; i++){
        let result = playRound();
        if (result == "tie") {
         i--;
         console.log("Round was a tie")
         console.log("Player Score: %d", PlayerScore)
         console.log("Computer Score: %d", ComputerScore)
        } else if (result == "win"){
            PlayerScore ++;
            console.log("Player won!")
            console.log("Player Score: %d", PlayerScore)
            console.log("Computer Score: %d", ComputerScore)

        } else{
            ComputerScore ++;
            console.log("Computer won!")
            console.log("Player Score: %d", PlayerScore)
            console.log("Computer Score: %d", ComputerScore)
        }
    }
    
    if(PlayerScore > ComputerScore){
        return console.log("Player wins, %d to %d",PlayerScore,ComputerScore)
    }else if (PlayerScore < ComputerScore){
        return console.log("Computer wins %d to %d!",ComputerScore,PlayerScore)
    }else{
        return console.log("Tied %d to %d",PlayerScore)
    }
}

console.log(game());
