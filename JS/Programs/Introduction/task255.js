// JavaScript: Find the maximum integer n



/**
 * 
 * 
 * JavaScript Basic: Exercise-145 with Solution
Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximum integer n.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function sumn(val) {
  var sn = 0;
  var i = 0;
  while (sn <= val) {
    sn += i++;
  }
  return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))




ES6 Version:

function sumn(val) {
  let sn = 0;
  let i = 0;
  while (sn <= val) {
    sn += i++;
  }
  return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))
Live Demo:


html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximum integer n</title>
</head>
<body>

</body>

js:



function sumn(val) {
  var sn = 0;
  var i = 0;
  while (sn <= val) {
    sn += i++;
  }
  return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))




 */