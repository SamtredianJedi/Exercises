// JavaScript: Check two given numbers and return true if one of the number is 50 or if their sum is 50


/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-18 with Solution
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.



Sample Solution:

HTML Code:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))

Sample Output:

true
true
false
true



ES6 Version:

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
Live Demo:



function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


 */