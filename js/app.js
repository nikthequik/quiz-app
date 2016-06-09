$(function() {
	var lifeCounter = 4,
		currentQuestion = 0,
		currentLevel = 1,
		results = 'You ended up at level <span class="level">1</span> with <span id="livesRemaining">5</span> lives left!';

	function newGame() {
		lifeCounter = 4,
		currentQuestion = 0,
		currentLevel = 1
		$('.life1, .life2, .life3, .life4').show();
		$('.level').text(currentLevel);
		$('#start').show();
		$('#backdrop').slideUp();
	};
	function nextQuestion() {
		$('#backdrop').slideDown();
		$('.choicebox').show();
		$('.sub').show();
		$('#qbox').text(questions[currentQuestion].question);
		$('.choicebox').html('<li class="choice"><input type="radio" name="choice" value="0">' + questions[currentQuestion].choices[0] + '</li><li class="choice"><input type="radio" name="choice" value="1">' + questions[currentQuestion].choices[1] + '</li><li class="choice"><input type="radio" name="choice" value = "2">' + questions[currentQuestion].choices[2] + '</li><li class="choice"><input type="radio" name="choice" value="3">' + questions[currentQuestion].choices[3] + '</li><button class="sub" type="button">Submit</button>');
	};
	function checkCorrect() {
		var attempt = parseInt($('input[type="radio"]:checked').val());
		$('.choicebox, .sub').hide();
		if (attempt === questions[currentQuestion].correct) {
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

	$('#tv-box').on('click', '.sub', function() {
		console.log($('input[type="radio"]:checked').val());
		if ($('input[type="radio"]:checked').val()) {
			checkCorrect();
		}
		
	});

	$('#tv-box').on('click', '#levelup', function() {
		var exp = '<p class="exp">' + questions[currentQuestion-1].explanation+ '</p>';
		$('#qbox').html(exp);
		$('#qbox').on('click', '.exp', function() {
			$('.exp').hide();
			if (lifeCounter === 0) {
				$('#qbox').html('<h1 id="gameover">Game Over</h1><h4 class="retry">Try Again</h4>');
				$('#qbox').on('click', '.retry', function() {
					$('#gameover, .retry').hide();
					newGame();
				});
			}
			else if (currentQuestion >= 5) {
				$('#qbox').html('<h3 id="results">You ended up at level <span class="level">' + currentLevel + '</span> with <span id="livesRemaining">' + lifeCounter + '</span> lives left!</h3><h4 class="retry">Try Again</h4>');
				$('#qbox').on('click', '.retry', function() {
					$('#results, .retry').hide();
					newGame();
				});
			}
			else {
				nextQuestion();
			}
		});
	});



});