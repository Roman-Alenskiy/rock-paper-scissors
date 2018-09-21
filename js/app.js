function computerPlay() {
    let shapes = ["rock", "paper", "scissors"]
    return shapes[Math.floor(Math.random() * shapes.length)]
}

function playRound() {
    let computerSelect = computerPlay();
    console.log(computerSelect)
    let playerSelect = this.id;
    console.log(playerSelect)
    let roundResult = defineRoundResult(computerSelect, playerSelect);
    setAnnouncerText(roundResult)
    editAnnouncerStyle(roundResult);
    editScore(roundResult);
    gameEndCheck();
}

function defineRoundResult(computerSelect, playerSelect) {
    if (computerSelect === playerSelect) {
        return "Draw!"
    }   else if (computerSelect === "rock" && playerSelect === "paper") {
        return "You win!"
    }   else if (computerSelect === "rock" && playerSelect === "scissors") {
        return "You lose! Rock beats Scissors!"
    }   else if (computerSelect === "paper" && playerSelect === "scissors") {
        return "You win!"
    }   else if (computerSelect === "paper" && playerSelect === "rock") {
        return "You lose! Paper beats Rock!"
    }   else if (computerSelect === "scissors" && playerSelect === "rock") {
        return "You win!"
    }   else if (computerSelect === "scissors" && playerSelect === "paper") {
        return "You lose! Scissors beats Paper!"
    }
}

function gameEndCheck() {
    rounds--
    if (rounds <= 0) {
        let gameResult
        if (playerWins === computerWins) {
            setAnnouncerText(gameResult = "Game is over: Draw!")
        } else if (playerWins > computerWins) {
            setAnnouncerText(gameResult = "Game is over: You win!")
        } else {
            setAnnouncerText(gameResult = "Game is over: You lose!")
        };
        editAnnouncerStyle(gameResult)
        announcer.style.fontWeight = "bold"
        setStartButton("Start new game!")
        chooseButtons.forEach(function(button) {
            button.removeEventListener('click', playRound)
        })
    }
}

function setStartButton(message) {
    startButton.textContent = message
}

function editAnnouncerStyle(result) {
    announcer.style.fontWeight = "normal"
    if (result === "You win!" || result === "Game is over: You win!") {
        announcer.style.backgroundColor = '#d8ffd3'
    } else if (result === "Draw!" || result === "Game is over: Draw!") {
        announcer.style.backgroundColor = '#d3eaff'
    } else {
        announcer.style.backgroundColor = '#ffd3d3'
    }
}

function resetAnnouncerStyle() {
    announcer.style.backgroundColor = '#d3eaff'
    announcer.style.fontWeight = "normal"
}

function setAnnouncerText(message) {
    announcer.textContent = message
}

function editScore(roundResult) {
    if (roundResult === "You win!") {
        playerWins++
        playerScore.textContent = playerWins;
    } else if (roundResult !== "Draw!") {
        computerWins++
        computerScore.textContent = computerWins
    }
}

function resetScore() {
    playerWins = computerWins = playerScore.textContent = computerScore.textContent = 0;
    
}

function game() {
    rounds = prompt("How much rounds are you want to play?");

    setStartButton("Restart!")
    resetAnnouncerStyle();
    setAnnouncerText("Make your choice!");
    resetScore();

    chooseButtons.forEach(function(button) {
        button.addEventListener('click', playRound)
    })
}

const startButton = document.querySelector('#start-game')
const chooseButtons = document.querySelectorAll('.btn-choose')
const announcer = document.querySelector('#announcer')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')

let playerWins
let computerWins
let rounds

startButton.addEventListener('click', game)