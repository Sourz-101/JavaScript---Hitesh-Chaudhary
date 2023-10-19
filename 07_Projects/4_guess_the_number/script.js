let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', (evt) => {
        evt.preventDefault();

        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // this is to check whether user have given correct input or not
    if(isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if(guess < 1) {
        alert('Please enter a number greater than or equal to 1');
    }
    else if(guess > 100) {
        alert('Please enter a number smaller than or equal to 100');
    }
    else {
        prevGuess.push(guess);

        if(numGuess > 9) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // this will check the input logically and tell user its high or low
    if(guess === randomNumber) {
        displayMessage(`You guesses it right. The number was ${randomNumber}`);
        endGame();
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is LOW`);
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is HIGH`);
    }
}

function displayGuess(guess) {
    // This will clean the input field, update previous guesses array and update guesses remaining
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    // This function will intract with DOM
    // This will print/update message on screen 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    // set values to end the game
    userInput.value = '';
    userInput.setAttribute('disabled','');
    // p.classList.add('button'); // dont know/Need
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>` 
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    // set values to restart the game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (evt) => {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);

        playGame = true;
    });
}

  