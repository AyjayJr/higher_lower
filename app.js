// variables required
const button = document.getElementById('guessBtn');
let userGuess = document.getElementById('userGuess');
let response = document.getElementById('response');
let guesses = [];
let max = 0;

// loop to request a max number and validate it is actually a number
do {
	max = prompt('Provide a maximum number');
}
while (max < 1 || isNaN(max))

// round number if user input was a decimal
max = Math.round(max);

// pick a random number between 1 and the user provided max
const number = Math.floor(Math.random() * (max - 1 + 1)) + 1;

// event listener that occurs when the guess button is pressed
// will tell you whether the number you guessed is lower or higher than the randomly chosen number
const submitGuess = () => {
	if (isNaN(userGuess.value)) {
		response.innerText = 'That is not a number!';
	}
	else if (userGuess.value < 1 || userGuess.value > max) {
		response.innerText = 'That number is not in range, try again.';
	}
	else if (guesses.find(element => element == userGuess.value)) {
		response.innerText = 'You have already guessed that number, try again.';
	}
	else if (userGuess.value == number) {
		guesses.push(userGuess.value);

		// slight response formatting when singular verbs are necessary
		if (guesses.length === 1) {
			response.innerText = 'You got it! It took you ' + guesses.length + ' try and your guess was ' + guesses.join('').trim() + '.';
		}
		else {
			response.innerText = 'You got it! It took you ' + guesses.length + ' tries and your guesses were ' + guesses.join(', ').trim() + '.';
		}

		// disable input and button so user cannot make anymore guesses after they win
		userGuess.disabled = true;
		button.disabled = true;
	}
	else if (userGuess.value > number) {
		guesses.push(userGuess.value);
		response.innerText = 'No, try a lower number.';
	}
	else if (userGuess.value < number) {
		guesses.push(userGuess.value);
		response.innerText = 'No, try a higher number.';
	}

	userGuess.value = '';
};

// add event listener to the guess button
button.addEventListener('click', submitGuess);