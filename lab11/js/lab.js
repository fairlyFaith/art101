// index.js - Experimenting with JQuery
// Author: Faith Smith
// Date: 5/17/2023


function main() {
  console.log("Main function started.");
  
  $("#chal").append("<button id='c-button'>Change Me!</button>");
  $("#prob").append("<button id='p-button'>Change Me!</button>");
  $("#res").append("<button id='r-button'>Change Me!</button>");
  $("#output").append("<button id='o-button'>Click Me!</button>");

  $("#p-button").click(function(){
    $("#prob").toggleClass("special")
  })

  $("#c-button").click(function(){
    $("#chal").toggleClass("special")
  })

  $("#r-button").click(function(){
    $("#res").toggleClass("special")
  })

  $("#0-button").click(function(){
    $("#output").toggleClass("pic")
  })

}

// let's get this party started
main();
