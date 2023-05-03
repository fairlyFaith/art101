// index.js - 
// Author: Faith Smith
// Date: 5/3/2023


function sortUserName() {
  // Retrieve name
  var userName = window.prompt("Hi. Please tell me your name so I can help you fix it.");
  console.log("userName = ", userName);

  // split the string into an array
  var nameArray = userName.split('')

  // sort the array in alphabetical order
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

   // change te array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
} 

//output 
document.writeln("Hey, I fixed your name: ",
  sortUserName(), "</br>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
