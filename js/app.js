var app = $(function() {
	var newGame = function() {
		lifeCounter = 4,
		currentQuestion = 0,
		currentLevel = 1
		$('.life1, .life2, .life3, .life4').show();
		$('.level').text(currentLevel);
		$('#start').show();
	};
	var quizApp = {
		Model: questions,
		View: {
			addChoiceBox: function(choices){
				return '<li class="choice"><input type="radio" name="choice" value="0">' + choices[0] + '</li><li class="choice"><input type="radio" name="choice" value="1">' + choices[1] + '</li><li class="choice"><input type="radio" name="choice" value = "2">' + choices[2] + '</li><li class="choice"><input type="radio" name="choice" value="3">' + choices[3] + '</li><button class="sub" type="button">Submit</button>';
			}
		},
		Controller: {
			newGame: newGame
		}
	};

	var lifeCounter = 4,
		currentQuestion = 0,
		currentLevel = 1,
		results = 'You ended up at level <span class="level">1</span> with <span id="livesRemaining">5</span> lives left!';



	function nextQuestion() {
		$('.choicebox').show();
		$('.sub').show();
		$('#qbox').text(quizApp.Model[currentQuestion].question);
		$('.choicebox').html(quizApp.View.addChoiceBox(quizApp.Model[currentQuestion].choices));
		$('.sub').on('click', function() {
			checkCorrect();
		});
	};
	function checkCorrect() {
		console.log('fire');
		var attempt = parseInt($('input[type="radio"]:checked').val());
		$('.choicebox, .sub').hide();
		if (attempt === quizApp.Model[currentQuestion].correct) {
			currentLevel++;
			$('#qbox').hide().html('<h1 id="levelup">Level Up!</h1>').fadeIn('fast').fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
			$('.level').text(currentLevel);
		}
		else {

			$('.life' + lifeCounter).hide();
			lifeCounter--;
			$('#qbox').hide().html('<h1 id="levelup">Lost A Life!</h1>').fadeIn('fast').fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
		}
		currentQuestion++;
	};

	$('#start').on('click', function() {
		
		$(this).hide();
		nextQuestion();
	});



	$('#tv-box').on('click', '#levelup', function() {
		var exp = '<p class="exp">' + quizApp.Model[currentQuestion-1].explanation+ '</p>';
		$('#qbox').html(exp);
		$('#qbox').on('click', '.exp', function() {
			$('.exp').hide();
			if (lifeCounter === 0) {
				$('#qbox').html('<h1 id="gameover">Game Over</h1><h4 class="retry">Try Again</h4>');
				$('#qbox').on('click', '.retry', function() {
					$('#gameover, .retry').hide();
					quizApp.Controller.newGame();
				});
			}
			else if (currentQuestion >= 5) {
				$('#qbox').html('<h3 id="results">You ended up at level <span class="level">' + currentLevel + '</span> with <span id="livesRemaining">' + lifeCounter + '</span> lives left!</h3><h4 class="retry">Try Again</h4>');
				$('#qbox').on('click', '.retry', function() {
					$('#results, .retry').hide();
					quizApp.Controller.newGame();
				});
			}
			else {
				nextQuestion();
			}
		});
	});
});