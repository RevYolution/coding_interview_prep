
var sqlQuestions = [];

function SQLQuestionBuilder(id, name, question, answer) {
    this.id = id;
    this.name = name;
    this.question = question;
    this.answer = answer;
    sqlQuestions.push(this);
}

var Q1 = new SQLQuestionBuilder(1, "Q1", "Write an SQL query to fetch “first_name” from worker table using the alias name as <worker_name>", "SELECT first_name AS worker_name FROM worker;");


$(function(){
    var i =0;
    var sqlStart = sqlQuestions[i];

    function populateSQL() {
        $("h1").replaceWith("<h1>SQL Questions</h1>");
        $(".first_p").replaceWith("<p id = question></p> <p id = answer></p>");
        $(".first_link").replaceWith("<a class = nav-link  id = OOP_Answer_Show href=#>Show Answer</a><br>").addClass("first_link")
        $(".second_link").replaceWith("<a class = nav-link id = Next_Question href=#>Next Question</a><br>").addClass("second_link")
        $(".third_link").replaceWith("<a class = nav-link id = Rando href=#>Random Question</a><br>").addClass("third_link");
        $("#question").text(sqlStart.question);
        $("#answer").text(sqlStart.answer).hide();
    }


    $("#SQL").on("click", populateSQL);
})