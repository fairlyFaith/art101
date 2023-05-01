// index.js - Using Arrays and Objects
// Author: Faith Smith
// Date: 5/1/2023

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  make = "Santa Cruz Metro";
  model = "Public Bus";
  color = "white";
  year = 2018;
  age = 2023 - year;

  myTransport = ["bus", " friends car", " uber", " bike"];

  var myMainRide = {
    make: "Santa Cruz Metro",
    model: "Public Bus",
    color: "white",
    year: 2018,
    age: function() {
        return 2022 - this.year;
    }
  }

  myMainRide.age() 

  document.writeln("Kinds of Transportation I use: " + myTransport + "<br>");
  document.writeln("My main ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}


// let's get this party started
main();
