// Objects
const game = {
    // Variables
    roundWinner: "",
    isOver: false,

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
    newGameMsg: "It's you vs. computer, first one to 5 points wins! Make your selection below to begin play.",
    humanWinsMsg: "Game over. You have defeated the computer! Odin cheers you for your capable efforts.",
    computerWinsMsg: "Game over. You have been defeated by the computer! Odin scowls at your disgrace.",
}


const video = {
    container: document.querySelector("#videoContainer"),
    source: document.querySelector("#videoSource"),
}


const player = {
    score: 0,
    winTotal: 0,
}


const computer = {
    score: 0,
    winTotal: 0,
}




// Functions
function newGame() {
    // Reset variables
    game.isOver = false;
    player.score = 0;
    computer.score = 0;
    game.roundWinner = "";

    // Reset display
    game.playerScoreDisplay.textContent = "0";
    game.computerScoreDisplay.textContent = "0";
    game.image.setAttribute("src", "./images/rps.jpg");

    // Reset message
    game.messageDisplay.classList.add("turns-default-color");
    game.messageDisplay.classList.remove("turns-red");
    game.messageDisplay.classList.remove("turns-green");
    updateMessage(game.newGameMsg);
}


function playRound(playerChoice) {
    if (player.score < 5 && computer.score < 5) {
        let computerChoice = getComputerChoice();
        roundWinner = determineWinner(playerChoice, computerChoice);

        let roundResult = chooseVideo(playerChoice, computerChoice);
        playVideo(roundResult);

        setTimeout(endRound, 1750);
    }
}


function getComputerChoice() {
    let random = Math.ceil(Math.random() * 3);
    if (random === 1) {
        return "Rock";
    }
    else if (random === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie!";
    }
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        player.score += 1;
        return "You win!"
    }
    else {
        computer.score += 1;
        return "Computer wins!";
    }
}


function chooseVideo(playerChoice, computerChoice) {
    const roundResult = `${playerChoice}${computerChoice}`;

    switch (roundResult) {
        case "RockRock": return "./video/RockRock.mp4"; break;
        case "RockPaper": return "./video/RockPaper.mp4"; break;
        case "RockScissors": return "./video/RockScissors.mp4"; break;
        case "PaperRock": return "./video/PaperRock.mp4"; break;
        case "PaperPaper": return "./video/PaperPaper.mp4"; break;
        case "PaperScissors": return "./video/PaperScissors.mp4"; break;
        case "ScissorsRock": return "./video/ScissorsRock.mp4"; break;
        case "ScissorsPaper": return "./video/ScissorsPaper.mp4"; break;
        case "ScissorsScissors": return "./video/ScissorsScissors.mp4"; break;
    }
}


function playVideo(roundResult) {
    game.image.classList.add("hide");
    video.container.classList.remove("hide");
    video.source.setAttribute("src", roundResult);
    video.container.load();
    video.container.play();
}


function endRound() {
    updateScores();
    updateMessage(roundWinner);

    if (player.score === 5 || computer.score === 5) {
        setTimeout(endGame, 1000);
    }
}


function updateScores() {
    game.playerScoreDisplay.textContent = player.score;
    game.computerScoreDisplay.textContent = computer.score;
}


function updateMessage(update) {
    game.messageDisplay.textContent = update;
}


function endGame() {
    game.isOver = true;

    game.image.classList.remove("hide");
    video.container.classList.add("hide");

    if (player.score > computer.score) {
        player.winTotal += 1;
        game.image.setAttribute("src", "./images/happy_odin.jpg");
        game.messageDisplay.classList.remove("turns-default-color");
        game.messageDisplay.classList.add("turns-green")
        updateMessage(game.humanWinsMsg);
        updateWinTotal()
    }
    else {
        computer.winTotal += 1;
        game.image.setAttribute("src", "./images/sad_odin.jpg");
        game.messageDisplay.classList.remove("turns-default-color");
        game.messageDisplay.classList.add("turns-red")
        updateMessage(game.computerWinsMsg);
        updateWinTotal();
    }
}


function updateWinTotal() {
    game.playerWinsDisplay.textContent = player.winTotal;
    game.computerWinsDisplay.textContent = computer.winTotal;
}


function resetGame() {
    player.winTotal = 0;
    computer.winTotal = 0;
    updateWinTotal();
    newGame();
}




// Button Event Listener, using Event Delegation
game.playGameButtons.addEventListener("click", (event) => {
    if (!game.isOver) {
        let target = event.target;

        switch (target.id) {
            case "rock": playRound("Rock"); updateMessage("Rock...Paper...Scissors SHOOT!"); break;
            case "paper": playRound("Paper"); updateMessage("Rock...Paper...Scissors SHOOT!"); break;
            case "scissors": playRound("Scissors"); updateMessage("Rock...Paper...Scissors SHOOT!"); break;
        }
    }
});

game.changeGameButtons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "newGame": if (game.isOver) { newGame() }; break;
        case "resetGame": if (confirm("Reset game?")) { resetGame(); }; break;
    }
});