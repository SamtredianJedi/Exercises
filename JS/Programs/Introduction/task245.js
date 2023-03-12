// JavaScript: Replace the first digit in a string (should contains at least digit) with $ character


/**
 * 

JavaScript Basic: Exercise-136 with Solution
Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Replace the first digit in a string (should contains at least digit) with $ character</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function replace_first_digit(input_str) {

  return input_str.replace(/[0-9]/, '$');
}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cabc"));   





ES6 Version:

function replace_first_digit(input_str) {

  return input_str.replace(/[0-9]/, '$');
}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cabc"));


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Replace the first digit in a string (should contains at least digit) with $ character</title>
</head>
<body>

</body>


js:



function replace_first_digit(input_str) {

  return input_str.replace(/[0-9]/, '$');
}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cabc"));


 */