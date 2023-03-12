// JavaScript: Check whether all the digits in a given number are the same or not

/**
 * 
 * 
 * JavaScript Basic: Exercise-140 with Solution
Write a JavaScript program to check whether all the digits in a given number are the same or not.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether all the digits in a given number are the same or not</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function test_same_digit(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return false;
num = Math.floor(num / 10);
  }
  return true
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));



ES6 Version:

function test_same_digit(num) {
  const first = num % 10;
  while (num) {
    if (num % 10 !== first) return false;
num = Math.floor(num / 10);
  }
  return true
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));

Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check if all the digits in a given number are the same or not</title>
</head>
<body>

</body>

js:



function test_same_digit(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return false;
num = Math.floor(num / 10);
  }
  return true
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));


 */