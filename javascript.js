// Game Object
const game = {
    // Selectors
    image: document.querySelector("#image"),
    playGameButtons: document.querySelector("#playGameButtonsContainer"),
    changeGameButtons: document.querySelector("#changeGameButtonsContainer"),
    messageDisplay: document.querySelector("#messageDisplay"),
    playerScoreDisplay: document.querySelector("#playerScore"),
    computerScoreDisplay: document.querySelector("#computerScore"),
    playerWinsDisplay: document.querySelector("#playerWinsTotal"),
    computerWinsDisplay: document.querySelector("#computerWinsTotal"),

    // Messages
    newGameMsg: "It's you vs. computer, first one to 5 points wins! Make your selection above to begin play.",
    humanWinsMsg: "Game over. You have defeated the computer! Humanity thanks you for your capable efforts.",
    computerWinsMsg: "Game over. You have been defeated by the computer! Better luck next time.",
}


// Player Object
const player = {
    score: 0,
    winTotal: 0,
}


// Computer Object
const computer = {
    score: 0,
    winTotal: 0,
}


// Functions
function newGame() {
    // Reset variables
    player.score = 0;
    computer.score = 0;

    // Reset displays
    game.playerScoreDisplay.textContent = "0";
    game.computerScoreDisplay.textContent = "0";
    game.image.setAttribute("src", "./images/rps.jpg");

    // Reset message
    game.messageDisplay.classList.remove("turns-green");
    game.messageDisplay.classList.remove("turns-red");
    updateMessage(game.newGameMsg);
}


function playRound(playerChoice) {
    if (player.score < 5 && computer.score < 5) {
        let computerChoice = getComputerChoice();
        let whoWon = determineWinner(playerChoice, computerChoice);

        updateScores();
        updateMessage(whoWon);

        if (player.score === 5 || computer.score === 5) {
            endGame();
        }
    }
}


function getComputerChoice() {
    let random = Math.ceil(Math.random() * 3);
    if (random === 1) {
        return "Rock";
    }
    else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
};


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie!";
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        player.score += 1;
        return "You win!"
    } else {
        computer.score += 1;
        return "Computer wins!";
    }
}


function updateScores() {
    game.playerScoreDisplay.textContent = player.score;
    game.computerScoreDisplay.textContent = computer.score;
}


function updateMessage(update) {
    game.messageDisplay.textContent = update;
}


function updateWinTotal() {
    game.playerWinsDisplay.textContent = player.winTotal;
    game.computerWinsDisplay.textContent = computer.winTotal;
}


function endGame() {
    if (player.score > computer.score) {
        player.winTotal += 1;
        game.image.setAttribute("src", "./images/happy_odin.jpg");
        game.messageDisplay.classList.add("turns-green");
        updateMessage(game.humanWinsMsg);
        updateWinTotal()
    }
    else {
        computer.winTotal += 1;
        game.image.setAttribute("src", "./images/sad_odin.jpg");
        game.messageDisplay.classList.add("turns-red");
        updateMessage(game.computerWinsMsg);
        updateWinTotal();
    }
}


function resetGame() {
    player.winTotal = 0;
    computer.winTotal = 0;
    updateWinTotal();
    newGame();
}



// Button Event Listener, using Event Delegation
game.playGameButtons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock": playRound("Rock"); break;
        case "paper": playRound("Paper"); break;
        case "scissors": playRound("Scissors"); break;
    }
});

game.changeGameButtons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "newGame": newGame(); break;
        case "resetGame": if (confirm("Reset game?")) { resetGame(); }; break;
    }
});