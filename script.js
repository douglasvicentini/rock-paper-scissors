const getRandomInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min)) + min);
};

const computerPlay = () => {
    let number = getRandomInt(1, 3.99999);

    if (number === 1) return 'Rock';
    else if (number === 2) return 'Paper';
    else if (number === 3) return 'Scissors';
    
};

const winMessage = (playerSelection, computerSelection) => {
    alert('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
};

const loseMessage = (playerSelection, computerSelection) => {
    alert('You lose... ' + computerSelection + ' beats ' + playerSelection + '.');
};

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') return winMessage(playerSelection, computerSelection);

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') return winMessage(playerSelection, computerSelection);

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') return winMessage(playerSelection, computerSelection);

    else if (playerSelection === computerSelection) return "It's a draw!";

    else return loseMessage(playerSelection, computerSelection);   
};

let playerSelection = window.prompt("Pick your weapon: ");

playRound(playerSelection, computerPlay());