// index.js - 63
// Author: Faith Smith
// Date: 5/3/2023

function main() {
  console.log("Main function started.");
    
  function getStuff() {
    console.log("Button pushed");
    $.ajax({
      url: "https://yesno.wtf//api",
      type: "GET",
      data: {},
    })
    .done(function(data) {
       // console.log(data);
      console.log(data);
      var answer = data.answer;
      var imgURL = data.image;
      $("#output").html("<h2>" + answer);
      $("#output").append("<img src=" + imgURL + ">");
    })
  }
  
  $("button").click(getStuff);

}

// let's get this party started
main();
