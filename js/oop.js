var oopQuestions = [];

function Question_oop(id, name, question, answer, resource){
    this.id = id;
    this.name = name;
    this.question = question;
    this.answer = answer;
    this.resource = resource;
    oopQuestions.push(this);
}

var whatIsOOP = new Question_oop(1, "What_Is_OOP", "What does OOP stand for?", "Object Oriented Programing", "N/A");
var whyOOP = new Question_oop(2, "Why_OOP", "Why use OOP in our programing?", "Better manageability of code base through encapsulation allowing for changing the underlying code but keep the same function", "N/A");
var principles = new Question_oop(3, "Principles" ,"What are the four main principles of OOP?", "Encapsulation, Abstraction, Polymorphism, Inheritance.", "N/A");
var encap = new Question_oop(4, "Encapsulation", "Describe Encapsulation", "BLAH BLAH", "N/A");
var abstract = new Question_oop(5, "Abstraction", "Describe Abstraction", "BLAH BLAH", "N/A");
var poly = new Question_oop(6, "Polymorphism", "Describe Polymorphism", "BLAH BLAH", "N/A");
var inheritance = new Question_oop(7, "Inheritance", "Describe Inheritance", "BLAH BLAH", "N/A");

console.log(oopQuestions);

// TODO: Prevent build up of <p> tags when OOP link clicked
// jQUery actions for OOP Questions
$(function(){
    var i = 0;
    var oopStart = oopQuestions[i];

    function populateOOP() {
        $(".start p").replaceWith("<p>OOP Questions</p>");
        $(".start").append("<p id = question></p> <p id = answer></p>")
        .append("<a class = nav-link id = OOP_Answer_Show href=#>Show Answer</a><br>")
        .append("<a class = nav-link id = Next_Question href=#>Next Question</a><br>")
        .append("<a class = nav-link id = Rando href=#>Random Question</a><br>")
        $("#question").text(oopStart.question);
        $("#answer").text(oopStart.answer).hide();
    }

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

    function populateRandomQuestion(){
        i = Math.floor(Math.random() * oopQuestions.length);
        console.log(`The value of i is ${i}`)
        var randomQuestion = oopQuestions[i];
        nextQuestion.replaceWith("<p id = question></p>")
        $("#question").text(randomQuestion.question);
        nextAnswer.replaceWith("<p id = answer></p>")
        $("#answer").text(randomQuestion.answer);

    }

    $("#OOP").on("click", populateOOP);

    $(".start").on("click", "#OOP_Answer_Show", function(){
        $("#answer").show();
        $("#OOP_Answer_Show").replaceWith("<a class = nav-link id = OOP_Answer_Hide>Hide Answer</a>");
    });

    $(".start").on("click", "#OOP_Answer_Hide", function(){
        $("#answer").hide();
        $("#OOP_Answer_Hide").replaceWith("<a class = nav-link id = OOP_Answer_Show>Show Answer</a>");
    });

    $(".start").on("click", "#Next_Question", populateNextQuestion);

    $(".start").on("click", "#Rando", populateRandomQuestion);
});