// index.js - Lab10 Javascript experimenting with events and forms
// Author: Faith Smith
// Date: 5/15/2023


function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  function sortUserName(str) {
    // split the string into an array
    var nameArray = str.split('')
  
    // sort the array in alphabetical order
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
  
     // change te array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
  
    return nameSorted;
  } 

  var button = document.getElementById("button");

  button.addEventListener("click", function(){
    var userInput = document.getElementById("input").value;
    var sortinput = sortUserName(userInput);
    console.log(sortinput)
    var sortedinput = document.getElementById("output");
    sortedinput.innerHTML = sortinput;

  })
}

// let's get this party started
main();
