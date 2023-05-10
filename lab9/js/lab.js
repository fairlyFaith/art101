// index.js - Javascript for the web
// Author: Faith Smith
// Date: 5/9/2023

// Constants

// Functions


function main() {
  console.log("Main function started.");

  //Making variables to edit Html using javascript 
  var outputEl = document.getElementById("content");

  //Edits text
  var New1El = outputEl.style.color = "white"; 

  var output2El = document.getElementById("output");

  //edits script output specifically
  var New2El = output2El.style.color = "red"; 

  //appends new changes together
  outputEl.appendChild(New1El);
  output2El.appendChild(New2El);
}

// let's get this party started
main();
