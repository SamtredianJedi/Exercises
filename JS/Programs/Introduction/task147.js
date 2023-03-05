// JavaScript: Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40

/**
 * 
 * 
 * JavaScript Basic: Exercise-41 with Solution
Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function three_numbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }

  if (x == y || y == z || z == x) {
    return 40;
  }

  return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));



ES6 Version:

function three_numbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }

  if (x == y || y == z || z == x) {
    return 40;
  }

  return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));


Live Demo:


function three_numbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }
​
  if (x == y || y == z || z == x) {
    return 40;
  }
​
  return 20;
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));


 */