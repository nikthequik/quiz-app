$(function() {
	var lifeCounter = 4,
		currentQuestion = 0,
		currentLevel = 1;

	var questions = [{
		question: "In 2015, the New Horizons space probe sent us back the best pictures to date of the planet Pluto.  Which gaming console contained the same CPU as the space probe?",
		choices: ['XBox', 'Playstation', 'Dreamcast', 'Atari'],
		correct: 1,
		qnum: 1,
		explanation: 'The IBM processor used in the Playstation was known for its reliability, making it a perfect choice for powering a probe for long journey'
		},{
		question: "What was the first video game console called?",
		choices: ['Atari', 'Pong', 'Brown Box', 'NES'],
		correct: 2,
		qnum: 2,
		explanation: 'The "Brown Box," though only a prototype, had basic features that most video games consoles still have today: two controls and a multigame program system.'
		},{
		question: "What is the best selling game console of all time?",
		choices: ['Playstation 2', 'XBox 360', 'Nintendo 64', 'GameBoy'],
		correct: 0,
		qnum: 3,
		explanation: ''
		},{
		question: "What was the first video game system to utilize DVD technology?",
		choices: ['Dreamcast', 'Playstation', 'Playstation 2', 'XBox'],
		correct: 2,
		qnum: 2,
		explanation: 'Gaming consoles began to expand their reach past their original purpose, and soon all gaming consoles came with the ability to play music and movies.'
		},{
		question: "What is the highest grossing arcade game of all time?",
		choices: ['Pac-Man', 'Donkey Kong', 'Space Invaders', 'Street Fighter 2'],
		correct: 0,
		qnum: 5,
		explanation: 'Pac-Man may be one of the most ubiquitous characters in video gaming history.  This game sold over 400,000 units and still acts as a symbol of retro gaming.'
		}
	];

	function nextQuestion() {
		$('#qbox').text(questions[currentQuestion].question);
		$('.choicebox').html('<li class="choice"><input type="radio" name="choice" value="0">' + questions[currentQuestion].choices[0] + '</li><li class="choice"><input type="radio" name="choice" value="1">' + questions[currentQuestion].choices[1] + '</li><li class="choice"><input type="radio" name="choice" value = "2">' + questions[currentQuestion].choices[2] + '</li><li class="choice"><input type="radio" name="choice" value="3">' + questions[currentQuestion].choices[3] + '</li><button class="submit" type="submit">Submit</button>');
	}

	$('#start').on('click', function() {
		console.log($(this));
		$(this).hide();
		nextQuestion();
	});






});