//Variable Declarations
var startBtn = $(".btn-start");

var questionArea = $(".question-area");

var introText = $("#intro");

//Creates an h2 for questionText
var questionText = $("<h2>");
$(".question-area").append(questionText);

//Sets the starting value for questions array
var questionIndex = 0;

//Array of objects to serve as the source for questions
var question = [ 
    {
    text:"Which American author is best known in fantasy for the Earthsea Cycle series?", 
    answers: [
        {answer: "Rebecca Roanhorse", correct: false},
        {answer:"Ursula K. LeGuin", correct: true},
        {answer:"Alyssa Wong", correct: false},
        {answer:"Ursula Vernon", correct: false}
    ]
    },

    {
        text:"Which American author became the first author to win the Hugo award for best novel for three consecutive years for the Broken Earth series?",
        answers: [
        {answer: "Nnedi Okorafor", correct: false},
        {answer:"Tasha Suri", correct: false},
        {answer:"N.K. Jemisin", correct: true},
        {answer:"Robin Hobb" , correct: false}
        ]
    },

    {
      text:"Which British author is the self-proclaimed Lord Grimdark and well-known for the flawed characters and dark humor in the First Law and Age of Madness series?",
       answers: [
        {answer: "Joe Abercrombie", correct: true},
        {answer:"Mark Lawrence", correct: false},
        {answer:"George R.R. Martin", correct: false},
        {answer:"Christopher Ruocchio" , correct: false}
        ] 
    },

        {
        text:"Which British author is widely considered the father of modern fantasy?",
        answers: [
        {answer: "Ed McDonald", correct: false},
        {answer:"Brian McClellan", correct: false},
        {answer:"Richard K. Morgan", correct: false},
        {answer:"J.R.R. Tolkien" , correct: true}
        ]
    }
];

//Function Declarations

//displays question when start button is clicked
function startQuestion(event) {
    event.preventDefault;
    //Remove paragraph element, h1 element
    $("#intro").hide();
    $("#title").hide();
    $(".btn-start").hide();
    nextQuestion();

     //Once quiz starts, timer should display in the top right hand corner and show much time is left. Use setInterval and clearInterval for timer. 
    var sec = 30;
    var addTimer = $("<span>").addClass("timer").text("30");
    $(".timer").append(addTimer);
    var timerFunction = setInterval(function () {
        $(addTimer).text(sec--);
        if (sec === 0) {
            gameOver();
            clearInterval(timerFunction);
        };
    }, 1000);

};

function nextQuestion() {
    $(questionText).text(question[questionIndex].text);

    $.each(question[questionIndex].answers, function (index, val) {
        var answerBtn = $("<button>").text(val.answer).addClass("btn-answer"); 
        $(".question-area").append(answerBtn);
        
        function checkAnswer(event) {
       if (val.correct) {
           questionIndex++;
           
           nextQuestion();
       } else {
            sec--;
            nextQuestion();
       };
        };

        answerBtn.click(checkAnswer);
    });

 //When the question is answered, it progresses to another question
//If the question is answered incorrectly, time is removed from the clock

};

//At gameover, should show an h1 "All done!", a p element that lists "Your final score + final score" and an input for them to enter their initials and a submit button. Then that info should be saved to localStorage. 
function gameOver() {
    $(".title").text("All Done!");
};

startBtn.click(startQuestion);