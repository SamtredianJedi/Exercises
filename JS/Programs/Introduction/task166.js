// JavaScript: Create a new string without the first and last character of a given string



/**
 * 
 * JavaScript Basic: Exercise-60 with Solution
Write a JavaScript program to create a new string without the first and last character of a given string.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new string without the first and last character of a given string.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));



ES6 Version:

function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));

Live Demo:


function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));


 */