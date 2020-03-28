$(function(){
    $(".start").append("<h1>Welcome to the Coding interview quiz site</h1>")
    .append("<p class = first_p>Please select a question category from above to start you quiz</p>");
    $(".start").append("<a class = nav-link id = basic href=#>Basic Questions</a><br>")
    .append("<a class = nav-link  id = Next_Question href=#>Next Question</a><br>")
    .append("<a class = nav-link  id = Rando href=#>Random Question</a><br>");

    $("#basic").addClass("first_link");
    $("#Next_Question").addClass("second_link");
    $("#Rando").addClass("third_link");
})