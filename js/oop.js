 //--------------------------------------------- Globals/Questions -------------------------------------------------------//

var oopQuestions = [];

function Question_oop(id, name, question, answer, resource){
    this.id = id;
    this.name = name;
    this.question = question;
    this.answer = answer;
    this.resource = resource;
    oopQuestions.push(this);
}

var whatIsOOP = new Question_oop(1, "QUESTION 1", "What does OOP stand for?", "Object Oriented Programing", "N/A");
var whyOOP = new Question_oop(2, "QUESTION 2", "Why use OOP in our programing?", "Better manageability of code base through encapsulation allowing for changing the underlying code but keep the same function", "N/A");
var principles = new Question_oop(3, "QUESTION 3" ,"What are the four main principles of OOP?", "Encapsulation, Abstraction, Polymorphism, Inheritance.", "N/A");
var encap = new Question_oop(4, "QUESTION 4", "Describe Encapsulation", "BLAH BLAH", "N/A");
var abstract = new Question_oop(5, "QUESTION 5", "Describe Abstraction", "BLAH BLAH", "N/A");
var poly = new Question_oop(6, "QUESTION 6", "Describe Polymorphism", "BLAH BLAH", "N/A");
var inheritance = new Question_oop(7, "QUESTION 7", "Describe Inheritance", "BLAH BLAH", "N/A");

console.log(oopQuestions);

// TODO: Prevent build up of <p> tags when OOP link clicked
// jQUery actions for OOP Questions
 //--------------------------------------------- Functions -------------------------------------------------------//
 $(function(){
    var i = 0;
    var oopStart = oopQuestions[i];
    // Populates the initial OOP Question screen
    function populateOOP() {
        $(".start h1").replaceWith("<h1>OOP Questions</h1>");
        $(".first_p").replaceWith("<p id = question></p> <p id = answer></p>");
        $(".first_link").replaceWith("<a class = nav-link  id = Answer_Show href=#>Show Answer</a>");
        $(".second_link").replaceWith("<a class = nav-link id = Next_OOP_Question href=#>Next Question</a>");
        $(".third_link").replaceWith("<a class = nav-link id = Rando_OOP href=#>Random Question</a>");
        $("#Answer_Show").addClass("first_link btn btn-primary btn-sm");
        $("#Next_OOP_Question").addClass("second_link btn btn-primary btn-sm");
        $("#Rando_OOP").addClass("third_link btn btn-primary btn-sm");    
        $("#question").text(oopStart.question);
        $("#answer").text(oopStart.answer).hide();
    }

    // Populates a new question when Next Question link is clicked. 
    var nextQuestion = $(".start").find("#question");
    var nextAnswer = $(".start").find("#answer");
    function populateNextQuestion(){
        i = (i + 1) % oopQuestions.length;
        var next = oopQuestions[i];
        nextQuestion.replaceWith("<p id = question></p>")
        $("#question").text(next.question);
        nextAnswer.replaceWith("<p id = answer></p>")
        $("#answer").text(next.answer);
        };

    // Populates a new random question when Random Question link is clicked. 
    function populateRandomQuestion(){
        i = Math.floor(Math.random() * oopQuestions.length);
        console.log(`The value of i is ${i}`)
        var randomQuestion = oopQuestions[i];
        nextQuestion.replaceWith("<p id = question></p>")
        $("#question").text(randomQuestion.question);
        nextAnswer.replaceWith("<p id = answer></p>")
        $("#answer").text(randomQuestion.answer);

    }

 //--------------------------------------------- Handlers -------------------------------------------------------//
    $("#OOP").on("click", populateOOP);

    $(".start").on("click", "#Answer_Show", function(){
        $("#answer").show();
        $("#Answer_Show").replaceWith("<a class = nav-link id = Answer_Hide>Hide Answer</a>");
        $("#Answer_Hide").addClass("btn btn-primary btn-sm");
    });

    $(".start").on("click", "#Answer_Hide", function(){
        $("#answer").hide();
        $("#Answer_Hide").replaceWith("<a class = nav-link id = Answer_Show>Show Answer</a>");
        $("#Answer_Show").addClass("btn btn-primary btn-sm");
    });

    $(".start").on("click", "#Next_OOP_Question", populateNextQuestion);

    $(".start").on("click", "#Rando_OOP", populateRandomQuestion);
});