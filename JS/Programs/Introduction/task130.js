// JavaScript: Check whether a given positive number is a multiple of 3 or a multiple of 7





/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-25 with Solution
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. </title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));





ES6 Version:

function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));



Live Demo:




function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
​
console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));



 */