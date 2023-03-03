// JavaScript: Check whether a given integer is within 20 of 100 or 400





/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-19 with Solution
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether a given integer is within 20 of 100 or 400.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));




ES6 Version:

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));




Live Demo:



function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
   (Math.abs(400 - x) <= 20));
}
​
console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));


 */