var movieReview = [
        "The best movie this year!",
        "I laughed, I cried, then I laughed again!",
        "I could not sleep after seeing this movie!"
    ];
$("img").click(function() {
    movieReview.forEach(function(movies) {
       $("#movieReviews").append("<p>" + movies + "</p>" );
});

});

$("button").click(function() {
    var child = $("#numberChild").val() * 8;
    var adult = $("#numberAdult").val() * 12;
    var total = adult + child;
    console.log(total);
    
  
 if(total <0) {
        $("#totalCost").text("You cannot select a negative number");
    }
    
   else if(total === 0) {
        $("#totalCost").text("You did not select any tickets");
    }
    
    else if(total >0) {
        $("#totalCost").text("Your total cost is" + " " + "$" + total);
    }
    
});
    



