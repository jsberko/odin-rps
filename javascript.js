console.log("Hello World")

// Write a function called "getComputerChoice" that randomly returns “rock”, “paper” or “scissors” (as a string)

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


// Create a function (getUserChoice) to get the user’s choice and store in the variable (userChoice)
//   prompt the user to enter their choice (1 for Rock, 2 for Paper, 3 for    
//   scissors)…and provide “1” as the default
//     if  userChoice !== 1, 2 or 3 prompt (“Please enter valid number)
    
//     If userChoice === 1 console.log(‘User chose “rock"’)
//     else if (userChoice === 2) console.log(‘User chose “paper”’)
//     else console.log(‘User chose “scissors”’)


//   Create a function (getComputerChoice) that randomly selects the
//   computer’s choice 
//     random = Math.ceil(Math.random() * 3)
//     if (random === 1) return “rock”
//     else if (random === 2) return “paper”
//     else return“scissors”
//   Store the function’s return in the variable  