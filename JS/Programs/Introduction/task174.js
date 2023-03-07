// JavaScript: Create a new string taking the first and last n characters from a given string



/**
 * 
 * 
 * JavaScript Basic: Exercise-68 with Solution
Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new string using the first and last n characters from a given string. The string length must be greater or equal to n.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));




ES6 Version:

function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));



Live Demo:




function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));



 */