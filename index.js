const store = {
    questions: [
        { text: "What HTML stands for?", answerChoices: ["Hyper Text Markup Language.", "Hyper Text Modeling Language.", "Hyper Type Markup Language.", "Hot Text Markup Language."], correctAnswer: "Hyper Text Markup Language." },
        { text: "What are tags?", answerChoices: ["HTML tags are used to create HTML documents and render their properties.", "Elements used to group the body content in a table.", "HTML elements is used to display the data in the tabular form.", "E-commers stickers."], correctAnswer: "HTML tags are used to create HTML documents and render their properties." },
        { text: "How many types of headings does an HTML contain??", answerChoices: ["It contains 6.", "It contains 4.", "It contains 1.", "None of the above."], correctAnswer: "It contains 6." },
        { text: "What’s the function of a <td> tag?", answerChoices: ["It displays the data in the tabular form.", "It defines a table.", "It defines a cell in a table.", "Answers 1 and 2."], correctAnswer: "It defines a cell in a table." },
        { text: "What is semantic HTML?", answerChoices: ["It is a coding style used to reinforce the semantics or meaning of the content.", "It’s HTML that uses bold statements.", "It is used to display a nested webpage.", "A book by Brad Frost."], correctAnswer: "It is a coding style used to reinforce the semantics or meaning of the content." },
        { text: "What an hyperlink applies to?", answerChoices: ["It applies to images.", "It applies to text.", "it applies to both, text and images.", "None of the above."], correctAnswer: "it applies to both, text and images." },
        { text: "The HTML provides an anchor tag to create a hyperlink that links one page to another page. In what of the following ways these tags can appear?", answerChoices: ["Unvisited link - It is displayed, underlined and blue.", "Visited link - It is displayed, underlined and purple.", "Active link - It is displayed, underlined and red.", "All the answers are correct."], correctAnswer: "All the answers are correct." },
        { text: "What’s the Aria role of a HTML header?", answerChoices: ["Banner", "Main", "Navigation", "Quote"], correctAnswer: "Banner" },
        { text: "What is an ordered list?", answerChoices: ["A list that displays elements in numbered format.", "A list that displays elements in bulleted format.", "A list that displays elements like in dictionary.", "A list that displays tags and images."], correctAnswer: "A list that displays elements in numbered format." },
        { text: "What is an image map?", answerChoices: ["It is a feature that allows us to use multicolor text on images.", "It is a feature that allows us to display a nested webpage.", "It is a feature that facilitates us to link many different web pages using a single image.", "It is the image of a map."], correctAnswer: "It is a feature that facilitates us to link many different web pages using a single image." }
    ],

    currQuestionIndex: 0,
    //currentScore: 0
    score: 0,
}

function nextQuestion() {
    //adds one to the store.currQuestionIndex
    store.currQuestionIndex++;
    renderQuestion()
}

function renderQuestion() {
    //get a text informing about the number of the question.
    $(".js-questionNum").text("Question #: " + store.currQuestionIndex + "/10");
    //defines var question.
    let question = store.questions[store.currQuestionIndex - 1];
    //gets the text of the question.
    $("#quizQuestion").text(question.text);
    $("#answer-list").empty(); // html.
    for (let i = 0; i < question.answerChoices.length; i++) {
        //for every item get the value.
        let listItem = `<li>
        <label>
          <input id="listId" type="radio" name="selectedRadio" value="${question.answerChoices[i]}" required />
          <span>${question.answerChoices[i]}</span>
        </label>
      </li>`;
        //apend it to the list.
        //$("#answer-list").append(<label for="?">?</label>)
        $("#answer-list").append(listItem);
        $("#continue").show();
        $("#content2").show();
        $("#content3").hide();
    }
}

//QUESTION AREA
//This butoon starts the quiz by removing elements and calling a function that creates new elements for the question:
function startQuizEventButton() {
    $("#startPageButton").click(function () {
        $("#content1").hide();
        $("#content2").show();
        $("#content2_a").hide();
        $('#continue').prop('disabled', true);
        nextQuestion();
        continueQuizEventButton();
        submitAnswerEventButton();
    });
}

//SUBMIT ANSWER
// document.getElementById("myForm").onsubmit
function submitAnswerEventButton() {
    $("#myForm").submit(function (e) {
        e.preventDefault()
        $(".js-answer-validation").empty(); //clears user's answer placeholder.
        var clickedAnswer = $("input[name='selectedRadio']:checked").val();
        $(".js-answer-validation").text();
        $(".js-answer-validation").append(clickedAnswer);
        $("#content2_a").show();
        /*enable button*/
        $('#continue').prop('disabled', false);
        booleanRightWrong();
        $("input[type=radio]").attr('disabled', true);
        printScoreCount();
    })
}


//BOOLEAN RIGHT/WRONG
function booleanRightWrong() {
    var clickedAnswer = $("input[name='selectedRadio']:checked").val();
    var rightAnswer = (store.questions[store.currQuestionIndex - 1]).correctAnswer;
    return (clickedAnswer === rightAnswer ? $(".js-correct-answer").text("Right.\n Congratulations!") : $(".js-correct-answer").text("Wrong. The correct answer is: " + rightAnswer));
}

//SCORE COUNT
function scoreCount() {
    //let score = 0;
    let clickedAnswer = $("input[name='selectedRadio']:checked").val();
    let rightAnswer = store.questions[store.currQuestionIndex - 1].correctAnswer;
    return (clickedAnswer === rightAnswer ? store.score += 1 : store.score);
}

//PRINT SCORE COUNT
function printScoreCount() {
    var scoreNum = scoreCount();
    $(".js-score").text(scoreNum + "/10");
}

//CONTINUE BUTTON
function continueQuizEventButton() {
    $("#continue").click(function () {
        $("#content2_a").hide(); //the validation feedback needs to be hidden, until the user submits the answer again.
        $('#continue').prop('disabled', true);
        return (store.currQuestionIndex < 10 ? nextQuestion() : finalContent());
    });
}

//FINAL CONTENT - content3.
function finalContent() {
    //hide this:
    $("#content2").hide();
    $("#continue").hide();
    //show this:
    $("#content3").show();
    var scoreNum = scoreCount();
    $(".js-scoreTotal").text(scoreNum + "/10");
    takeAgain();
}

//take quiz again button
function takeAgain() {
    $("#takeAgainbt").click(function () {
        //hide this:
        //$("#content3").hide();
        store.currQuestionIndex = 1;
        store.score = 0;
        renderQuestion();
    });

}
//STARTING CONTENT GENERATION
function startingContent() {
    //hide this:
    $("#content2").hide();
    $("#content2_a").hide();
    $(".js-content3").hide();
    $("#continue").hide();
}

function handleFunctions() {
    // scoreCount();
    startingContent();
    startQuizEventButton();
}

$(handleFunctions);