//Variable Declarations
var startBtn = $(".btn-start");

var questionArea = $(".question-area");

var introText = $("#intro");

var viewScores = $(".view-scores");

var timerFunction;

var storedScores = JSON.parse(localStorage.getItem('scores')) || [];

var sec = 30;

var scoreCounter = 0;

//Sets the starting value for questions array
var questionIndex = 0;

//Array of objects to serve as the source for questions
var question = [
  {
    text: "Which American author is best known in fantasy for the Earthsea Cycle series?",
    answers: [
      { answer: "Rebecca Roanhorse", correct: false },
      { answer: "Ursula K. LeGuin", correct: true },
      { answer: "Alyssa Wong", correct: false },
      { answer: "Ursula Vernon", correct: false },
    ],
  },

  {
    text: "Which American author became the first author to win the Hugo award for best novel for three consecutive years for the Broken Earth series?",
    answers: [
      { answer: "Nnedi Okorafor", correct: false },
      { answer: "Tasha Suri", correct: false },
      { answer: "N.K. Jemisin", correct: true },
      { answer: "Robin Hobb", correct: false },
    ],
  },

  {
    text: "Which British author is the self-proclaimed Lord Grimdark and well-known for the flawed characters and dark humor in the First Law and Age of Madness series?",
    answers: [
      { answer: "Joe Abercrombie", correct: true },
      { answer: "Mark Lawrence", correct: false },
      { answer: "George R.R. Martin", correct: false },
      { answer: "Christopher Ruocchio", correct: false },
    ],
  },

  {
    text: "Which British author is widely considered the father of modern fantasy?",
    answers: [
      { answer: "Ed McDonald", correct: false },
      { answer: "Brian McClellan", correct: false },
      { answer: "Richard K. Morgan", correct: false },
      { answer: "J.R.R. Tolkien", correct: true },
    ],
  },
];

//Function Declarations

//displays question when start button is clicked
function startQuestion(event) {
  event.preventDefault;
  nextQuestion();

  //Once quiz starts, timer should display in the top right hand corner and show much time is left. Use setInterval and clearInterval for timer.
  var addTimer = $("<span>").addClass("timer").text("30");
  $(".timer").append(addTimer);
  timerFunction = setInterval(function() {
    sec--;
    $(addTimer).text(sec);
    if (sec < 1) {
      gameOver();
    }
  }, 1000);
}

function nextQuestion() {
  $(".question-area").empty();

  var questionText = $("<h2>");
  $(".question-area").append(questionText);
  $(questionText).text(question[questionIndex].text);

  $.each(question[questionIndex].answers, function (index, val) {
    var answerBtn = $("<button>").text(val.answer).addClass("btn-answer");
    $(".question-area").append(answerBtn);

    function checkAnswer(event) {
      if (val.correct) {
        var warningText = $("<p>").text("Correct!");
        $(".warning").append(warningText);
        setTimeout(function() {
           $(warningText).remove();
        }, 1000);
        scoreCounter++;
      } else {
        var warningText = $("<p>").text("Incorrect!");
        $(".warning").append(warningText);
        setTimeout(function() {
           $(warningText).remove();
        }, 1000);
        sec--;
      }

      questionIndex++;

      if (questionIndex < question.length) {
        nextQuestion();
      } else {
        gameOver();
      }
    }

    answerBtn.click(checkAnswer);
  });
}

//At gameover, should show an h1 "All done!", a p element that lists "Your final score + final score" and an input for them to enter their initials and a submit button. Then that info should be saved to localStorage.
function gameOver() {
  clearInterval(timerFunction);
  $(".timer").hide();
  $(".question-area").empty();
  $(".question-area").append($("<h1>").text("All done!"), $("<p>").text("Your final score is " + scoreCounter + "."));
  $(".question-area").append($("<label>").attr("for", "initials").text("Initials: "));
  var userInits = $("<input>").attr({
    type: "text",
    id: "initials",
    name: "initials"
  });
  $(".question-area").append(userInits);
 var initSubmit = $("<button>").text("Submit");
  $(".question-area").append(initSubmit);

  function saveScores() {
    var userInput = userInits.val();

    var userObject = {
      userInits: userInput,
      userScore: scoreCounter
    }

    storedScores.push(userObject);

    localStorage.setItem("scores", JSON.stringify(storedScores))

    displayScores();
  }

  initSubmit.click(saveScores);

}



function displayScores() {
  $(".question-area").empty();
  $(".question-area").append($("<h1>").text("High Scores"));
  var scoreDisplay = $("<div>");
  $(".question-area").append(scoreDisplay);
  
  $.each(storedScores, function(index, value) {
    $(scoreDisplay).append($("<p>").text(value.userInits + " - " + value.userScore));
  });

  var clearBtn = $("<button>").text("Clear High Scores");
  var resetBtn = $("<button>").text("Reset Quiz");

  $(".question-area").append(clearBtn, resetBtn);

  clearBtn.click(function() {
    $(scoreDisplay).empty();
    storedScores = [];
    localStorage.setItem("scores", JSON.stringify(storedScores));
  })

  resetBtn.click(function() {
    location.reload();
  })
}

function highScores() {
  gameOver();
  displayScores();
}

startBtn.click(startQuestion);

viewScores.click(highScores);
