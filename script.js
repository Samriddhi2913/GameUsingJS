let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"]
}

const playGame=()=>{
    console.log("user choice is: ", userChoice);
    // Generate Computer Choice
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});