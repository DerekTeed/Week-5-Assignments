var questions = [{
    question: "What is the Average IQ test in America?",
    choices: [
        80, 95, 100, 115,
    ],
    correctAnswer: 100

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
//start buildHtml fct
function buildHtml() {
    var questionsListDiv = $("#questions");
    var questionDiv;
    var newQuestion;
    var newChoice;

    for (var i = 0; i < questions.length; i++) {
        newQuestion = questions[i].question;

        //Creating questions in HTML
        questionDiv = $("<div class='question'>").text(newQuestion);

        console.log(`On outter loop pass #${i} the question was :${questions[i].question}`);

        //start inner loop to extract choices for each question
        for (var j = 0; j < 4/*questions[0].choices[j].length*/; j++) {
            //extracting choicess array from obj and looping through each choice
            newChoice = questions[i].choices[j];

            questionDiv.append("<input type='radio' id='newChoice'" + newChoice + "'><label>" + newChoice + "</label>");

            //  $("#newChoice").append("</div>");
            //append each new virtual choice div to DOM
            //  questionsListDiv = $("#newChoice");
            //     questionsListDiv.append(choicesDiv);
        } //end choices loop

         //append new virtual question div to DOM
         questionsListDiv.append(questionDiv);

    }//end outer loop to extract each question
}//end buildHTML()



$(document).ready(function () {

    buildHtml();

    //Creating a function that will pull values from input[type=radio] that are checked
    $("#btnSubmit").click(function () {
        //Trying to get the result value of boxed checked
        var result = $("input[type='radio']:checked");
        //Trying to push the checked values into#btnSubmit
        result.each(function () {
            resultAnswers += $(this).val() + "<br>";
            $("#divResult").html(result)
        })
    })

    var startTime = 60;
    var countDown = setInterval(function () {

        startTime--;
        $("#timer").text("Remaining time: " + startTime);



        //var seconds = Math.floor((startTime % (1000 * 60)) / 1000);
        if (startTime === 0) {
            $("#timer").text("Time is up!");
            clearInterval(countDown);

        }
    }, 1000)

    console.log(countDown);
});


//#empty which runs function counts which questions were right and wrong, //#endregion
// jquery.empty questions then jquery the questions in the html. .text you got (number correct) (number wrong)

 $("#btnSubmit").click(function() {
  window.location.href="../pageThree.html";
})
















/**********
function buildHtml() {
    for (var i = 0; i < questions.length; i++) {
        //Creating question1 in HTML
        var question1 = $("<p>").text(questions[i].question1);
        $("#questions").append(question1);
        console.log(buildHtml);
        //how do i get this right under #questions


        for (var j = 0; j < questions[0].choices1[j].length; j++) {
            $("<div id='answers1'>" + "<input type='radio'>" + "</div>").text(questions[0].answers[j]);
            var answers1 = $("<div>").text(questions[0].choices1[j]);
            $("#answers1").append(answers1);


            //answers1;
        }
    }


    //Creating question1 in HTML
    var question2 = $("<p>").text(questions[i].question2);
    $("#questions").append(question2);
    console.log(buildHtml);



    //Creating question1 in HTML
    var question3 = $("<p>").text(questions[i].question3);
    $("#questions").append(question3);
    console.log(buildHtml);


    //Creating question1 in HTML
    var question4 = $("<p>").text(questions[i].question4);
    $("#questions").append(question4);
    console.log(buildHtml);




    //append a div with class list, lots of append
    //div with class choices
    //append input $("<div class>"")
    //iterate over the choices and use radio buttons
    //for();

}


$("input[value='90']").next().text("&ensp;90");
$(document).ready(function () {
    buildHtml();




    //Creating a function that will pull values from input[type=radio] that are checked
    $("#btnSubmit").click(function () {
        //Trying to get the result value of boxed checked
        var result = $("input[type='radio']:checked");
        //Trying to push the checked values into#btnSubmit
        result.each(function () {
            resultAnswers += $(this).val() + "<br>";
            $("#divResult").html(result)
        })
    })
    var startTime = 60;
    var countDown = setInterval(function () {

        startTime--;
        $("#timer").text(startTime);

        //Time calculation for minutes

        //var seconds = Math.floor((startTime % (1000 * 60)) / 1000);
        if (startTime === 0) {
            $("#timer").text("Time is up!");
            clearInterval(countDown);

        }
    }, 1000)

    console.log(countDown);
});


//#empty which runs function counts which questions were right and wrong, //#endregion
// jquery.empty questions then jquery the questions in the html. .text you got (number correct) (number wrong)

var nextPage = function () {
    $("#btnSubmit").click(event)

}****/