let shapes = ["Rock", "Paper", "Scissors"]

function capitalize(string) {
    return string.slice(0, 1).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase();
}

function computerPlay() {
    return shapes[Math.floor(Math.random() * shapes.length)]
}

function playerPlay() {
    let input = prompt("Choose Rock, Paper or Scissors!");
    return inputCheck(input)
}

function inputCheck(input) {
    input = capitalize(input);
    if (!shapes.includes(input)) {
        alert("Incorrect input!");
        return playerPlay();
    } else {
        return input;
    }
}

function playRound(computerSelect, playerSelect) {
    if (computerSelect === playerSelect) {
        return "Draw!"
    }   else if (computerSelect === "Rock" && playerSelect === "Paper") {
        return "You win!"
    }   else if (computerSelect === "Rock" && playerSelect === "Scissors") {
        return "You lose! Rock beats Scissors!"
    }   else if (computerSelect === "Paper" && playerSelect === "Scissors") {
        return "You win!"
    }   else if (computerSelect === "Paper" && playerSelect === "Rock") {
        return "You lose! Paper beats Rock!"
    }   else if (computerSelect === "Scissors" && playerSelect === "Rock") {
        return "You win!"
    }   else if (computerSelect === "Scissors" && playerSelect === "Paper") {
        return "You lose! Scissors beats Paper!"
    }
}

function winnerCheck(playerWins, computerWins) {
    if (playerWins === computerWins) {
        return "Game is over: Draw!"
    } else if (playerWins > computerWins) {
        return "Game is over: You win!"
    } else {
        return "Game is over: You lose!"
    }
}

function game() {
    let rounds = prompt("How much rounds are you want to play?");
    let playerWins = computerWins = 0;

    for (let i = 0; i < rounds; i++) {
        let roundResult = playRound(computerPlay(), playerPlay());

        if (roundResult === "You win!") {
            playerWins++
        } else if (roundResult !== "Draw!") {
            computerWins++
        };

        alert(`${roundResult}\nYou - ${playerWins}, Computer - ${computerWins}`)
    }

    alert(`${winnerCheck(playerWins, computerWins)}\n${playerWins}:${computerWins}`);
}

game();