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


// jQUery actions for OOP Questions
// TODO: switch to replaceWith()
$(function(){
    $("#OOP").on("click", function(){
        $(".start").append("<p>OOP Questions</p>").append("<p>`${oopQuestions[0].question}`</p>");
        
    })
})