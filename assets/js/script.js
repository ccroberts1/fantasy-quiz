//Variable Declarations
var startBtn = document.querySelector(".btn-start");

var questionArea = document.querySelector(".question-area");

var introText = document.querySelector("#intro")



//When the user clicks on the start button, a question appears on the screen. Will need an array of question objects. 



startBtn.addEventListener("click", startQuestion);



//Once quiz starts, timer should display in the top right hand corner and show much time is left. Use setInterval and clearInterval for timer. 

//When the question is answered, it progresses to another question
//If the question is answered incorrectly, time is removed from the clock
//If else statement for question logic

//When all questions are answered or the timer reaches 0, game is over. If statement

//At gameover, should show an h1 "All done!", a p element that lists "Your final score + final score" and an input for them to enter their initials and a submit button. Then that info should be saved to localStorage. 