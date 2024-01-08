var score = JSON.parse(localStorage.getItem('score') || '{"wins": 0, "losses": 0, "ties": 0}');
updateScoreElement();
function playGame(playMove) {
    var computerMove = pickComputerMove();
    var result;
    if (playMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You Lose';
        }
        else {
            result = 'You Win';
        }
    }
    else if (playMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else {
            result = 'You Lose';
        }
    }
    else if (playMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        }
        else if (computerMove === 'Paper') {
            result = 'You Win';
        }
        else {
            result = 'Tie';
        }
    }
    if (result === 'You Win') {
        score.wins++;
    }
    else if (result === 'You Lose') {
        score.losses++;
    }
    else if (result === 'Tie') {
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    var resultElement = document.querySelector('.js-result');
    if (resultElement) {
        resultElement.innerHTML = result || '';
    }
    var movesElement = document.querySelector('.js-moves');
    if (movesElement) {
        movesElement.innerHTML = "You \n            <img src=\"images/".concat(playMove, "-emoji.png\" class=\"move-icon\" alt=\"\">\n            <img src=\"images/").concat(computerMove, "-emoji.png\" class=\"move-icon\" alt=\"\">\n            Computer");
    }
}
function updateScoreElement() {
    var scoreElement = document.querySelector('.js-score');
    if (scoreElement) {
        scoreElement.innerHTML = "Wins: ".concat(score.wins, ", Losses: ").concat(score.losses, ", Ties: ").concat(score.ties);
    }
}
function pickComputerMove() {
    var randomNumber = Math.random();
    var computerMove = 'Rock'; // Assign a default value
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }
    return computerMove;
}
