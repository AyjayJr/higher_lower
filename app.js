let max = prompt();
const button = document.getElementById('guessBtn');
const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let userGuess = document.getElementById('userGuess');
let response = document.getElementById('response');

const submitGuess = () => {

	if (userGuess.value === '') {
		response.innerText = 'That number is not in range, try again.';
	}
	else if (+userGuess.value === number) {
		response.innerText = 'You got it!';
	}
	else if (userGuess.value > number) {
		response.innerText = 'No, try a lower number.';
	}
	else if (userGuess.value < number) {
		response.innerText = 'No, try a higher number.';
	}

	userGuess.value = '';
};


button.addEventListener('click', submitGuess);