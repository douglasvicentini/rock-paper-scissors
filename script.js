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

const game = () => {

    let playerCount = 0;
    let computerCount = 0;

    for (let count = 1; count <= 5; ++count){
        let input = window.prompt('      Game #' + count + '\nPick your weapon: ');
        let playerInput = formatInput(input);
        let computerSelection = computerPlay();
        let round = playRound(playerInput, computerSelection);

        if (round === 1){
            printWinMessage(playerInput, computerSelection);
            ++playerCount;
        } else if (round === -1){
            printLoseMessage(playerInput, computerSelection);
            ++computerCount;
        } else if (round === 0) {
            printDrawMessage();
        }         
    }

    if (playerCount > computerCount)
        console.log("Congratulations! You've won! ");
    else if (playerCount < computerCount)
        console.log("Oh no... You've lost!")
    else 
        console.log("No one won!");

};

game();
