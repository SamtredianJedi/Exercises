// JavaScript: Move last three character to the start of a specified string

/**
 * 
 * 
 * JavaScript Basic: Exercise-62 with Solution
Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to move last three character to the start of a given string. The string length must be 3.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function right_three(str) {
     if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));


ES6 Version:

function right_three(str) {
     if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));


Live Demo:


function right_three(str) {
     if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));


 */