//Variable Declarations
var startBtn = $(".btn-start");

var questionArea = $(".question-area");

var introText = $("#intro");
//Creates an h2 for questionText
var questionText = $("<h2>");
$(".question-area").append(questionText);

//Creates a ul and append to the question-area section, will be used as the area for the possible answers.
var questionAnswerList = $("<ul>");
$(".question-area").append(questionAnswerList);

//Array of objects to serve as the source for questions
var questions = [ {
    id: 1,
    txt:"Which American author is known in fantasy for the Earthsea Cycle series?", 
    ans1:"Rebecca Roanhorse",
    ans2:"Ursula K. LeGuin",
    ans3:"Alyssa Wong",
    ans4:"Ursula Vernon"
    },

    {
        id: 2,
        txt:"Which American author became the first author to win the Hugo award for best novel for three consecutive years for the Broken Earth series?",
        ans1:"Nnedi Okorafor",
        ans2:"Tasha Suri",
        ans3:"N.K. Jemisin",
        ans4:"Robin Hobb"
    },

    {
      id: 3,  
      txt:"Which British author is the self-proclaimed Lord Grimdark and well-known for the flawed characters and dark humor in the First Law and Age of Madness series?",
        ans1:"Joe Abercrombie",
        ans2:"Mark Lawrence",
        ans3:"George R.R. Martin",
        ans4:"Patrick Rothfuss"  
    },

        {
        id: 4,
        txt:"Which British author is known as the father of modern fantasy?",
        ans1:"Richard K. Morgan",
        ans2:"Ed McDonald",
        ans3:"Robin Hobb",
        ans4:"J.R.R. Tolkien"
        }
];

//displays question when start button is clicked
function startQuestion(event) {
    event.preventDefault;
    //Remove paragraph element, h1 element
    $("#intro").hide();
    $("#title").hide();
    $(".btn-start").hide();
    
   
//Displays the starting question text and possible answers
    $(questionText).text(questions[0].txt);

//Next steps: maybe map the answers to an array and iterate over the array to display the possible answers? Also maybe define the lis globally, then just change the text inside of this function. 
    var answer1 = $("<li>").text(questions[0].ans1); 
    $("ul").append(answer1);

      $(questionText).text(questions[0].txt);
    var answer2 = $("<li>").text(questions[0].ans2); 
    $("ul").append(answer2);

      $(questionText).text(questions[0].txt);
    var answer3 = $("<li>").text(questions[0].ans3); 
    $("ul").append(answer3);

      $(questionText).text(questions[0].txt);
    var answer4 = $("<li>").text(questions[0].ans4); 
    $("ul").append(answer4);

 //Select the first object from the questions array. Use a for each loop to start looping through the array. 
    // $.each(questions, function(index, object) {

    //      //Insert object.question into an h2 element, append to the question area section
        
    //     var newQuestion=$("<h2>").text(object.txt);
    //     $(".question-area").append(newQuestion);

    //      //Display the values for the a1, 2, 3, 4 keys as new lis in the newly created ul
    //     var answer1 = $("<li>").text(object.ans1); 
    //     $("ul").append(answer1);
    // });

    //Once quiz starts, timer should display in the top right hand corner and show much time is left. Use setInterval and clearInterval for timer. 

}

startBtn.click(startQuestion);


//When the question is answered, it progresses to another question
//If the question is answered incorrectly, time is removed from the clock
//If else statement for question logic

//When all questions are answered or the timer reaches 0, game is over. If statement

//At gameover, should show an h1 "All done!", a p element that lists "Your final score + final score" and an input for them to enter their initials and a submit button. Then that info should be saved to localStorage. 