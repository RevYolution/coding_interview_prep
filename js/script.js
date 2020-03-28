$(function(){
    $(".start").append("<div class = card width: 18rem></div>");
    $(".card").append("<div class = card-body></div>");
    $(".card-body").append("<h1>Welcome to the Coding interview quiz site</h1>")
    .append("<p class = first_p>Please select a question category from above to start you quiz</p>")
    .append("<a class = nav-link id = basic href=#>Basic Questions</a>")
    .append("<a class = nav-link  id = Next_Question href=#>Next Question</a>")
    .append("<a class = nav-link  id = Rando href=#>Random Question</a>");

    $("h1").addClass("card-title");
    $(".first_p").addClass("card-text");
    $("#basic").addClass("first_link btn btn-primary btn-sm");
    $("#Next_Question").addClass("second_link btn btn-primary btn-sm");
    $("#Rando").addClass("third_link btn btn-primary btn-sm");
})