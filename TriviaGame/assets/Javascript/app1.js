//Creating my beautiful array with 4 questions with 4 answer choices per question and 1 correct answer per question.
var questions = [{
    question: "What is the Average IQ test in America?",
    choices: [
        "80", "95", "100", "115",
    ],
    correctAnswer: "100"
},
{
    question: "Where did the first Wal-Mart store open?",
    choices: [
        "Minnesota", "Arkansas", "Louisiana", "Texas",
    ],
    correctAnswer: "Arkansas"
},
{
    question: "What was the population of earth on July 1, 2018?",
    choices: [
        "8.1 billion", "7.8 billion", "7.6 billion", "7.4 billion",
    ],
    correctAnswer: "7.8 billion"
},
{
    question: "What is the median human age in 2018?",
    choices: [
        "25.5 years old", "27.7 years old", "29.9 years old", "31.1 years old",
    ],
    correctAnswer: "29.9 years old"
}
]

//start buildHtml fct that will be the HTML foundation with for loops
function buildHtml() {
    //Create my variables for reference
    var questionsListDiv = $("#questions");
    var questionDiv;
    var newQuestion;
    var newChoice;

    for (var i = 0; i < questions.length; i++) {
        //Getting my 4 questions to display
        newQuestion = questions[i].question;

        //putting my 4 questions to the HTML
        questionDiv = $("<div class='question'>").text(newQuestion);
        console.log(`On outter loop pass #${i} the question was :${questions[i].question}`);
        //start inner loop to extract choices for each question

        for (var j = 0; j < 4; j++) {
            //THIS TOOK FOREVER 5+ HOURS TO GET WORKING AFTER LOTS OF HELP!!! ALMOST QUIT LIFE!!!
            //extracting choicess array from obj and looping through each choic
            newChoice = questions[i].choices[j];
            //instructor helped me to assign 1-4 at end of name for each answer choice for each questions. This allows me to only click 1 answer at a time.
            questionDiv.append("<input type='radio' name='question" + i + "' value='" + newChoice + "'><label>" + newChoice + "</label>");
        } //end choices loop

        //append new virtual question div to DOM
        questionsListDiv.append(questionDiv);

        // $("#divResult2").append(incorrectAnswerTotal);

    }//end outer loop to extract each question

}//end buildHTML()



$(document).ready(function () {

    //Placing my buildHtml to start my background html structure
    buildHtml();
    //Creating a function that will pull values from input[type=radio] that are checked
    $("#btnSubmit").click(function () {
        //storing my Variables and arrays
        //shortcut to div
        var divResult = $("#divResult");
        var chosenChoice = [];
        //Trying to get the result value of checked boxes
        var chosenChoice = $("input[type='radio']:checked");
        var resultAnswers = [];
        var correctAnswerTotal = 0;
        var incorrectAnswerTotal = 0;
        var i = 0;
        //Somehow making a for loop function thingy
        chosenChoice.each(function () {
            //Storing my values to resultAnswers
            resultAnswers += $(this).val() + "<br>";
            //Trying to put the answers into an array, but not sure it is working
            $("#divResults").append(resultAnswers);
            //Put the chosen answer to the div divResult
            divResult.html(chosenChoice)
            console.log("chosenChoice");
            //Seeing if it works 
            console.log(chosenChoice);
            console.log(questions[i].correctAnswer);
            //Get my correct and incorrect answers to show up +1 for each
            if ($(this).val() === questions[i].correctAnswer) {
                console.log("CORRECT");
                //+1 each
                correctAnswerTotal++;
                //Put correct +1 to bottom of page
                $("#divResult2").html("Correct number: " + correctAnswerTotal);
            } else {
                console.log("INCORRECT");
                //+1 each
                incorrectAnswerTotal++;
                //Put incorrect +1 to bottom of page
                $("#divResult3").html("Incorrect number: " + incorrectAnswerTotal);
            }
            i++;
        })

    });



    //Start Timer construction and startTime variable
    var startTime = 50;
    var countDown = setInterval(function () {
        //Starttime -1 second each
        startTime--;
        $("#timer").text("Remaining time: " + startTime);
        //When it gets to 0 time is up 
        if (startTime === 0) {
            $("#timer").text("Time is up!");
            //clears the countdown so it stops counting negative below zero
            clearInterval(countDown);
            //Get everything to hide as soon as time up
            $('#questions :not(#divResult, #divResult2, #divResult3)').hide();
            //Only the results divs will remain, button can still be pushed for score
            $('#divResult, #divResult2, #divResult3').appendTo('body');
        }
        //-1 second each
    }, 1000)
    console.log(countDown);

});