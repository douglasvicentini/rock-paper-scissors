const getRandomInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min)) + min);
};

const printWinMessage = (playerSelection, computerSelection) => {
    alert('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
};

const printLoseMessage = (playerSelection, computerSelection) => {
    alert('You lose... ' + computerSelection + ' beats ' + playerSelection + '.');
};

const printDrawMessage = () => {
    alert("It's a draw!");
}

const formatInput = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

const computerPlay = () => {
    let number = getRandomInt(1, 3.99999);

    if (number === 1) return 'Rock';
    else if (number === 2) return 'Paper';
    else if (number === 3) return 'Scissors';
    
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') return 1;
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') return 1;
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') return 1;
    else if (playerSelection === computerSelection) return 0;
    else return -1;   
};

const getRoundWinner = (round) => {
    if (round === 1)
        ++playerCount;
    else if (round === -1)
        ++computerCount;
};

const getGameWinner = (playerCount, computerCount) => {
    if (playerCount === 5)
        alert("Congratulations! You've WON!");
    else if (computerCount === 5) 
        alert("Oh no... You've lost!");
    else
        return;
}

const printScores = (playerCount, computerCount) => {
    console.log('Your score: ' + playerCount);
    console.log('Computer score: ' + computerCount);
}

const body = document.querySelector('body');

const btnsContainer = document.createElement('div');
btnsContainer.classList.add('btns-container');
btnsContainer.style.marginTop = "20%";
btnsContainer.style.marginLeft = "45%";

const rock = document.createElement('button');
rock.classList.add('selection');
rock.id = "rock";
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.classList.add('selection');
paper.id = "paper";
paper.textContent = 'Paper';

const scissors = document.createElement('button');
scissors.classList.add('selection');
scissors.id = "scissors";
scissors.textContent = 'Scissors';

body.appendChild(btnsContainer);

btnsContainer.appendChild(rock);
btnsContainer.appendChild(paper);
btnsContainer.appendChild(scissors);

let playerCount = 0;
let computerCount = 0;

const playRock = document.querySelector('#rock').addEventListener('click', () => {
    let round = playRound('Rock', computerPlay());
    getRoundWinner(round);
    printScores(playerCount, computerCount);
    getGameWinner(playerCount, computerCount);
});

const playPaper = document.querySelector('#paper').addEventListener('click', () => {
    let round = playRound('Paper', computerPlay());
    getRoundWinner(round);
    printScores(playerCount, computerCount);
    getGameWinner(playerCount, computerCount);
});

const playScissors = document.querySelector('#scissors').addEventListener('click', () => {
    let round = playRound('Scissors', computerPlay());
    getRoundWinner(round);
    printScores(playerCount, computerCount);
    getGameWinner(playerCount, computerCount);
});

