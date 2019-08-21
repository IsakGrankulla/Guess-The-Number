let numberInput = document.getElementById('number');
let button = document.getElementById('button');
let p = document.getElementById('answer');
let numberToGuess = Math.round(Math.random() * 20);
let resultElement = document.getElementById('answer');

button.addEventListener('click', onButtonClicked);

function onButtonClicked(event) {
    let guessedNumber = parseInt(numberInput.value);
    event.preventDefault();
    if (guessedNumber === numberToGuess) {
        resultElement.innerHTML = "You guessed the correct number!";
    } else if (guessedNumber < 0) {
        resultElement.innerHTML = "the number must be between 0 and 20";
    } else if (guessedNumber > 20) {
        resultElement.innerHTML = "The number must be between 0 and 20";
    } else if (guessedNumber < numberToGuess) {
        resultElement.innerHTML = "Your guess is too low";
    } else if (guessedNumber > numberToGuess) {
        resultElement.innerHTML = "your guess is too high";
    } else {
        resultElement.innerHTML = "Your guess must be a number";
    }
}