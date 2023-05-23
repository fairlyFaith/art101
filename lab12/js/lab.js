// index.js - Creating a sorting function
// Author: Faith Smith
// Date: 5/22/2023

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }

    else if (mod == 1) {
      return "Ravenclaw"
    }

    else if (mod == 2) {
      return "Slytherin"
    }

    else if (mod == 3) {
      return "Hufflepuff"
    }
  }

  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>"
    document.getElementById("output").innerHTML = newText;

  })
}

// let's get this party started
main();
