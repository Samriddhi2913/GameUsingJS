let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("Game Drawn");
}

const showWinner = (userWin)=>{
    if(userWin){
        console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is: ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer choice is: ",compChoice);

    //Draw Game
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock paper
            userWin =compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});