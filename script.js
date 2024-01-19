let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore_span = document.querySelector("#user-score");
const botScore_span = document.querySelector("#bot-score");

const draw = () => {
     msg.innerText = "It's a Draw, Try Again!";
     msg.style.backgroundColor = "#5C3D2E";
};

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin) {
        userScore++;
        userScore_span.innerHTML = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
     } else {
        botScore++;
        botScore_span.innerHTML = botScore;
        msg.innerText = `You lost. ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
}

const getBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const playGame = (userChoice) => {
    // Generate Computer Choice
    const botChoice = getBotChoice();

    if(userChoice === botChoice){
       draw();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
           userWin = botChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            userWin = botChoice === 'scissors' ? false : true;
        } else {
            userWin = botChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
       playGame(userChoice)
    })
})