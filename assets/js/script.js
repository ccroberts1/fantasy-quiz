//Variable Declarations
var startBtn = $(".btn-start");

var questionArea = $(".question-area");

var introText = $("#intro");

//Array of objects to serve as the source for questions
var questions = [ {
    question:"Which American author is most well-known for the Earthsea Cycle series?", 
    ans1:"Rebecca Roanhorse",
    ans2:"Ursula K. LeGuin",
    ans3:"Alyssa Wong",
    ans4:"Ursula Vernon"
    },

    {
        question:"Which American author became the first author to win the Hugo award for best novel for three consecutive years for the Broken Earth series?",
        ans1:"Nnedi Okorafor",
        ans2:"Tasha Suri",
        ans3:"N.K. Jemisin",
        ans4:"Robin Hobb"
    },

    {
      question:"Which British author is the self-proclaimed Lord Grimdark and well-known for the flawed characters and dark humor in the First Law and Age of Madness series?",
        ans1:"Joe Abercrombie",
        ans2:"Mark Lawrence",
        ans3:"George R.R. Martin",
        ans4:"Patrick Rothfuss"  
    },

        {
    question:"Which British author is known as the father of modern fantasy?",
        ans1:"Richard K. Morgan",
        ans2:"Ed McDonald",
        ans3:"Robin Hobb",
        ans4:"J.R.R. Tolkien"
        }
];

//Picks a random question object from the questions array
var randomQuestion = $(questions[Math.floor(Math.random() * questions.length)]);
console.log(randomQuestion);

//displays question when start button is clicked
function startQuestion(event) {
    event.preventDefault;
    //Remove paragraph element, h1 element
    $("#intro").hide();
    $("#title").hide();
    $(".btn-start").hide();
    //Select an object from the questions array
    
    //Insert object into an h2 element, append to the question area section
    var newQuestion=$("<h2>").text(randomQuestion);
    $(".question-area").append(newQuestion);
    //Create a ul and append to the question-area section
    var questionAnswerList = $("<ul>");
    $(".question-area").append(questionAnswerList);
    //Display the values for the a1, 2, 3, 4 keys
}

startBtn.click(startQuestion);

//Once quiz starts, timer should display in the top right hand corner and show much time is left. Use setInterval and clearInterval for timer. 


//When the question is answered, it progresses to another question
//If the question is answered incorrectly, time is removed from the clock
//If else statement for question logic

//When all questions are answered or the timer reaches 0, game is over. If statement

//At gameover, should show an h1 "All done!", a p element that lists "Your final score + final score" and an input for them to enter their initials and a submit button. Then that info should be saved to localStorage. 