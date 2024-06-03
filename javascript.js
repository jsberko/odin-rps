console.log('Best out of 5 wins! \nType "playGame()" to execute the game')

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // gameOver = false;

    for (i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log(`Round ${i}: Tie! \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`)
            } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
                humanScore += 1;
                console.log(`Round ${i}: You win! ${humanChoice} beats ${computerChoice}! \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
            } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
                computerScore += 1;
                console.log(`Round ${i}: You lose! ${computerChoice} beats ${humanChoice}! \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
            }
        }
    }

    if (computerScore > humanScore) {
        alert(`Game over: Computer wins \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else if (humanScore > computerScore) {
        alert(`Game over: You win! \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else {
        alert(`Game over: It's a tie! \nYour Score: ${humanScore}\nComputer Score: ${computerScore} `);
    };

    console.log("Thanks for playing!");
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

function getHumanChoice() {
    let choice = 0;
    while (choice !== 1 || choice !== 2 || choice !== 3) {
        choice = prompt("It's time to play! \n \nEnter 1 for Rock; \nEnter 2 for Paper; \nEnter 3 for Scissors;", "Please enter a number between 1 and 3")

        if (choice === "1") {
            return "Rock";
            break;
        } else if (choice === "2") {
            return "Paper";
            break;
        } else if (choice === "3") {
            return "Scissors";
            break;
        }
    }
}



