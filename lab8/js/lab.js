// index.js - Anon and Callback Functions
// Author: Faith Smith
// Date: 5/3/2023

// Constants

// Functions


function main() {
  console.log("Main function started.");

  //Function that multiples number by 10
    function Times10(x){
    var Result = (x*10);
    return Result;
  }

  //Test for function
  console.log("Testing if function works: 4 x 10 = " + Times10(4));

  console.log("Testing if function works: 564 x 10 = " + Times10(564));

  //array of numbers being put in list
  var arraylist = array = [2, 5, 90, 100, 58932, 984628193];
  
  //console log showing array
  console.log("My Array: " + array);
  
  var multi = array.map(Times10);

  //console log showinf arrayx10
  console.log("My Array x 10: " + array.map(Times10));

  var anon = array.map(function(x){
    var results = (x**8);
    return results;
  })

  console.log("My Array ^8: " + anon);


  var outputEl = document.getElementById("output"); 
  outputEl.innerHTML = ("My array: " + arraylist +
  " <br> " + "My numbers times 10: " + multi +
  " <br> " + "My numbers to the 8th power: " + anon); // put your results here

}

// let's get this party started
main();



