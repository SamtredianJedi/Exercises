// JavaScript: Compute the sum of cubes of all integer from 1 to an given integer



/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-146 with Solution
Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of cubes of all integer from 1 to an given integer.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function sum_Of_Cubes(n) {
  var sumn = 0;

  for (var i = 1; i <= n; i++) {
    sumn += Math.pow(i, 3);
  }
  return sumn;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));





ES6 Version:

function sum_Of_Cubes(n) {
  let sumn = 0;

  for (let i = 1; i <= n; i++) {
    sumn += i ** 3;
  }
  return sumn;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));
Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of cubes of all integer from 1 to an  given integer</title>
</head>
<body>

</body>


js:




function sum_Of_Cubes(n) {
  var sumn = 0;

  for (var i = 1; i <= n; i++) {
    sumn += Math.pow(i, 3);
  }
  return sumn;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));



 */