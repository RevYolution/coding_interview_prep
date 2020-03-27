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
console.log(oopQuestions);

// jQUery actions for OOP Questions
// TODO: switch to replaceWith()
$(function(){
    var oopStart = oopQuestions[0];

    $("#OOP").on("click", function(){
        $(".start p").replaceWith("<p>OOP Questions</p>");
        $(".start").append("<p id = question></p><p id = answer display = hidden></p>").append("<a class = nav-link id = OOP_Answer_Show href=#>Show Answer</a>");
        $("#question").text(oopStart.question);
        
    });


    $(".start").on("click", "#OOP_Answer_Show", function(){
        $("#answer").text(oopStart.answer).show();
        $("#OOP_Answer_Show").replaceWith("<a class = nav-link id = OOP_Answer_Hide>Hide Answer</a>");
    })
    $(".start").on("click", "#OOP_Answer_Hide", function(){
        $("#answer").hide();
        $("#OOP_Answer_Hide").replaceWith("<a class = nav-link id = OOP_Answer_Show>Show Answer</a>");
    })
});