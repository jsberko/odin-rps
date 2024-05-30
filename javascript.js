console.log("Hello to Odin Project: Rock, Paper, Scissors")

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);


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
        choice = prompt("It's time to play Rock, Paper, Scissors! \nEnter 1 for Rock; \nEnter 2 for Paper; \nEnter 3 for Scissors;", "Please enter a number between 1 and 3")

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!")
        console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
    }
}



// function playGame() {

//     for (i = 0; i <= 4; i++) {
//         playRound
//     }

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === computerChoice) {
//             console.log("Tie!")
//         } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
//             humanScore += 1;
//             console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
//         } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
//             computerScore += 1;
//             console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//         }
//     }
// }



