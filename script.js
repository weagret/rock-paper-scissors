const computerSelectionOptions = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
};
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const drawMessage = () => `Draw`;
const winnerMessage = (playerSelection, computerSelection) => {
    return `You win! ${playerSelection} beats ${computerSelection}`;
};
const loserMessage = (playerSelection, computerSelection) => {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
};

function getRandomNumber(value) {
    // the result will be from 0 to value-1
    return Math.floor(Math.random() * value);
}
function getComputerChoice() {
    return computerSelectionOptions[getRandomNumber(3)];
}
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return drawMessage(); }

    if (computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Scissors" ||
        computerSelection === "Scissors" && playerSelection === "Rock") {

        return winnerMessage(playerSelection, computerSelection);
    }
    return loserMessage(playerSelection, computerSelection);
}
function playGame() {
    for (let i = 0; i < 5; ++i) {
        let userChoice = prompt("Enter Rock Paper or Scissors: ")
        if (userChoice === null) { break; }
        userChoice = capitalizeFirstLetter(userChoice);
        roundResult = checkWinner(userChoice, getComputerChoice());
        console.log(roundResult);
    }
}