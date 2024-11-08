// Game Object
const game = {
    // Variables
    roundWinner: "",

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
    humanWinsMsg: "Game over. You have defeated the computer! Humanity thanks you for your capable efforts.",
    computerWinsMsg: "Game over. You have been defeated by the computer! Better luck next time.",
}

// Video Object
const video = {
    container: document.querySelector("#videoContainer"),
    source: document.querySelector("#videoSource"),
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
function playVideo(roundResult) {
    game.image.classList.add("hide");
    video.container.classList.remove("hide");
    video.source.setAttribute("src", roundResult);
    video.container.load();
    video.container.play();
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


function newGame() {
    // Reset variables
    player.score = 0;
    computer.score = 0;
    game.roundWinner = "";

    // Reset displays
    game.playerScoreDisplay.textContent = "0";
    game.computerScoreDisplay.textContent = "0";
    game.image.setAttribute("src", "./images/rps.jpg");

    // Reset message
    game.messageDisplay.classList.remove("turns-green");
    game.messageDisplay.classList.remove("turns-red");
    updateMessage(game.newGameMsg);
}

function endRound() {
    updateScores();
    updateMessage(roundWinner);

    if (player.score === 5 || computer.score === 5) {
        endGame();
    }
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
    } else {
        return "Scissors";
    }
};


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Rock") {
        return "Tie!";
        game.image.setAttribute("src", "./video/Rock_Rock.mp4");
    }
    else if (playerChoice === computerChoice) {
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
    game.image.classList.remove("hide");
    video.container.classList.add("hide");

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