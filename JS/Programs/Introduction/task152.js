// JavaScript: Check from two given non-negative integers that whether one of the number is multiple of 7 or 11

/**
 * 
 * 
 * JavaScript Basic: Exercise-46 with Solution
Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));



ES6 Version:

function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.</title>
</head>
<body>
​
</body>


js:



function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));
 */