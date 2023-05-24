// index.js - 
// Author: Faith Smith
// Date: 5/3/2023



function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function fizzBuzz() {
  
    for (var i=1; i<=200; i++) {
      
      var str = '';
    
      if (i % 3 == 0) {
        str += "Fizz";
      }
      
      if (i % 5 == 0) {
        str += "Buzz";
      }
     
      if (i % 7 == 0) {
        str += "Boom";
      }

      if (str == '') {
        str += i;
      } 
      
      else {
        str += "!";
      }

      debugger;
      $("#output").append("<p>" + str + "</p>")
    }
  })
  
  fizzBuzz();
}

// let's get this party started
main();
