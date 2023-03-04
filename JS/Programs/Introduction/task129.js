// JavaScript: Create a new string from a given string with the first character of the given string added at the front and back

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-24 with Solution
Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));




ES6 Version:

function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));



Live Demo:


function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));


 */