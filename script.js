const computerSelectionOptions = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
};
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
let playerWon = 0;
let computerWon = 0;
const ROUNDS = 5;

const BODY = document.querySelector("body");
const HEADER = document.querySelector("header");
const FOOTER = document.querySelector("footer");
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
function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return drawMessage(); }

    if (computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Scissors" ||
        computerSelection === "Scissors" && playerSelection === "Rock") {

        return winnerMessage(playerSelection, computerSelection);
    }
    return loserMessage(playerSelection, computerSelection);
}
function increaseCounter() {
    const message = document.querySelector(".message > h3").innerText;
    switch (message) {
        case "You win": playerWon++; break;
        case "You lose": computerWon++; break;
    }
}
function changeCounterMessage() {
    let counters = document.querySelectorAll(".space-between.message > p");
    counters[0].innerText = counters[0].innerText.split(":")[0] + ": " + playerWon;
    counters[1].innerText = counters[1].innerText.split(":")[0] + ": " + computerWon;
}
function roundEndMessage() {
    let smallText = document.querySelector(".message > h4");
    computerWon = 0;
    playerWon = 0;
    smallText.innerText = "round is ended";
}
function changeCounters() {
    increaseCounter();
    changeCounterMessage();
    if (computerWon === 5 || playerWon === 5) {
        roundEndMessage()
    }
}
function changeWinnerMessage(winnerMessage) {
    let bigText = document.querySelector(".message > h3");
    let smallText = document.querySelector(".message > h4");

    if (playerWon < ROUNDS && computerWon < ROUNDS) {
        let arr = winnerMessage.split("!"); arr.push("");
        bigText.innerText = arr[0];
        smallText.innerText = arr[1].trim();

    }
}
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let winnerMessage = getWinner(playerSelection, computerSelection);
    changeWinnerMessage(winnerMessage);
    changeCounters();
}

function changeToWhiteTheme(e) {
    e.alt = "sun goes down";
    e.src = "./images/sun-down.png";
    BODY.style.color = "#000000";
    BODY.style.backgroundColor = "#A5A5A5";
    HEADER.style.backgroundColor = "#565656";
    FOOTER.style.backgroundColor = "#565656";
}
function changeToBlackTheme(e) {
    e.alt = "sun goes up";
    e.src = "./images/sun-up.png";
    BODY.style.color = "#FF5500";
    BODY.style.backgroundColor = "#191A21";
    HEADER.style.backgroundColor = "#2D3045";
    FOOTER.style.backgroundColor = "#2D3045";
}

function changeTheme(e) {
    if (e.alt === "sun goes up") {
        changeToWhiteTheme(e);
    } else {
        changeToBlackTheme(e);
    }
}

function main() {
    let buttons = document.querySelector(".item-list > ul");
    buttons.addEventListener("click", (e) => {
        const img = e.target;
        if (img.alt !== undefined) {
            playRound(img.alt);
        }
    });
    let themeBtn = document.querySelector("nav > ul > li > img");
    themeBtn.addEventListener("click", (e) => {
        changeTheme(e.target);
    });
}
main()