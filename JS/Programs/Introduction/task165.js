// JavaScript: Extract the first half of a string of even length



/**
 * 
 * 
 * JavaScript Basic: Exercise-59 with Solution
Write a JavaScript program to extract the first half of a string of even length.


Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to  extract the first half of a string of even length.</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP"));




ES6 Version:

function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP"));
Visualize JavaScript code execution:
The following tool visualize what the computer is doing step-by-step as it executes the said program:

Live Demo:




function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP"));


 */