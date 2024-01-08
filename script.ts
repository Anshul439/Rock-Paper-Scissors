interface Score {
    wins: number;
    losses: number;
    ties: number;
}

let score: Score = JSON.parse(localStorage.getItem('score') || '{"wins": 0, "losses": 0, "ties": 0}');

updateScoreElement();

function playGame(playMove: 'Rock' | 'Paper' | 'Scissors') {
    const computerMove: 'Rock' | 'Paper' | 'Scissors' = pickComputerMove();
    let result: 'You Win' | 'You Lose' | 'Tie' | undefined;

    if (playMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else {
            result = 'You Win';
        }
    } else if (playMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You Lose';
        }
    } else if (playMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.wins++;
    } else if (result === 'You Lose') {
        score.losses++;
    } else if (result === 'Tie') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    const resultElement = document.querySelector('.js-result');
    if (resultElement) {
        resultElement.innerHTML = result || '';
    }

    const movesElement = document.querySelector('.js-moves');
    if (movesElement) {
        movesElement.innerHTML = `You 
            <img src="images/${playMove}-emoji.png" class="move-icon" alt="">
            <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
            Computer`;
    }
}

function updateScoreElement() {
    const scoreElement = document.querySelector('.js-score');
    if (scoreElement) {
        scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
}

function pickComputerMove(): 'Rock' | 'Paper' | 'Scissors' {
    const randomNumber: number = Math.random();
    let computerMove: 'Rock' | 'Paper' | 'Scissors' = 'Rock'; // Assign a default value

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
    return computerMove;
}
