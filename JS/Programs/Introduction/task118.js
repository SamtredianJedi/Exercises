// JavaScript: Get the difference between a given number




/**
 * 
 * 
 * JavaScript Basic: Exercise-15 with Solution
Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>The difference between a given number and 13, if the number is greater than 13 return double the absolute difference.</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))

Sample Output:

38
2
ES6 Version:

function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))



Live Demo:



function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))



 */