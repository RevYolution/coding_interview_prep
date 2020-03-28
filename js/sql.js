
var sqlQuestions = [];

function SQLQuestionBuilder(id, name, question, answer) {
    this.id = id;
    this.name = name;
    this.question = question;
    this.answer = answer;
    sqlQuestions.push(this);
}

var Q1 = new SQLQuestionBuilder(1, "Q1", "Write an SQL query to fetch “first_name” from worker table using the alias name as <worker_name>", "SELECT first_name AS worker_name FROM worker;");
var Q2 = new SQLQuestionBuilder(2, "Q2", "Write an SQL query to fetch “first_name” from worker table in upper case.", "SELECT UPPER(first_name) FROM worker;");
var Q3 = new SQLQuestionBuilder(3, "Q3", "Write an SQL query to fetch unique values of department from worker table.", "SELECT DISTINCT department FROM worker;");
var Q4 = new SQLQuestionBuilder(4, "Q4", "Write an SQL query to print the first three characters of  FIRST_NAME from Worker table.", "Select substring(FIRST_NAME,1,3) from Worker;");
var Q5 = new SQLQuestionBuilder(5, "Q5", "Write an SQL query to find the position of the alphabet (‘a’) in the first name column ‘Amitabh’ from Worker table.", "Select INSTR(FIRST_NAME, BINARY'a') from Worker where FIRST_NAME = 'Amitabh';");
var Q6 = new SQLQuestionBuilder(6, "Q6", "Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.", "Select RTRIM(FIRST_NAME) from Worker;");
var Q7 = new SQLQuestionBuilder(7, "Q7", "Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.", "Select LTRIM(DEPARTMENT) from Worker;");
var Q8 = new SQLQuestionBuilder(8, "Q8", "Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length.", "Select distinct length(DEPARTMENT) from Worker;");
var Q9 = new SQLQuestionBuilder(9, "Q9", "Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.", "Select REPLACE(FIRST_NAME,'a','A') from Worker;");
var Q10 = new SQLQuestionBuilder(10, "Q10", "Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME. A space char should separate them.", "Select CONCAT(FIRST_NAME, ' ', LAST_NAME) AS 'COMPLETE_NAME' from Worker;");
// var Q11 = new SQLQuestionBuilder(11, "Q11", "", "");
// var Q12 = new SQLQuestionBuilder(12, "Q12", "", "");
// var Q13 = new SQLQuestionBuilder(13, "Q13", "", "");
// var Q14 = new SQLQuestionBuilder(14, "Q14", "", "");
// var Q15 = new SQLQuestionBuilder(15, "Q15", "", "");
// var Q16 = new SQLQuestionBuilder(16, "Q16", "", "");
// var Q17 = new SQLQuestionBuilder(17, "Q17", "", "");
// var Q18 = new SQLQuestionBuilder(18, "Q18", "", "");
// var Q19 = new SQLQuestionBuilder(19, "Q19", "", "");
// var Q20 = new SQLQuestionBuilder(20, "Q20", "", "");


$(function(){
    var i =0;
    var sqlStart = sqlQuestions[i];

    function populateSQL() {
        $("h1").replaceWith("<h1>SQL Questions</h1>");
        $(".first_p").replaceWith("<p id = question></p> <p id = answer></p>");
        $(".first_link").replaceWith("<a class = nav-link  id = Answer_Show href=#>Show Answer</a>");
        $(".second_link").replaceWith("<a class = nav-link id = Next_SQL_Question href=#>Next Question</a>");
        $(".third_link").replaceWith("<a class = nav-link id = Rando_SQL href=#>Random Question</a>");
        $(".start").append("<textarea cols = 50 rows = 5>Enter Your SQL Query Here</textarea>");
        $("#Answer_Show").addClass("first_link");
        $("#Next_SQL_Question").addClass("second_link");
        $("#Rando_SQL").addClass("third_link");    
        $("#question").text(sqlStart.question);
        $("#answer").text(sqlStart.answer).hide();
    }

    var nextQuestion = $(".start").find("#question");
    var nextAnswer = $(".start").find("#answer");
    function populateNextQuestion(){
        i = (i + 1) % sqlQuestions.length;
        var next = sqlQuestions[i];
        nextQuestion.replaceWith("<p id = question></p>")
        $("#question").text(next.question);
        nextAnswer.replaceWith("<p id = answer></p>")
        $("#answer").text(next.answer);
        };

    // Populates a new random question when Random Question link is clicked. 
    function populateRandomQuestion(){
        i = Math.floor(Math.random() * sqlQuestions.length);
        console.log(`The value of i is ${i}`)
        var randomQuestion = sqlQuestions[i];
        nextQuestion.replaceWith("<p id = question></p>")
        $("#question").text(randomQuestion.question);
        nextAnswer.replaceWith("<p id = answer></p>")
        $("#answer").text(randomQuestion.answer);

    }


    $("#SQL").on("click", populateSQL);

    $(".start").on("click", "#Answer_Show", function(){
        $("#answer").show();
        $("#Answer_Show").replaceWith("<a class = nav-link id = Answer_Hide>Hide Answer</a>");
    });

    $(".start").on("click", "#Answer_Hide", function(){
        $("#answer").hide();
        $("#Answer_Hide").replaceWith("<a class = nav-link id = Answer_Show>Show Answer</a>");
    });

    $(".start").on("click", "#Next_SQL_Question", populateNextQuestion);

    $(".start").on("click", "#Rando_SQL", populateRandomQuestion);

})