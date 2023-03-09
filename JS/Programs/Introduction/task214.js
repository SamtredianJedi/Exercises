// JavaScript: Create the dot products of two given 3D vectors

/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-108 with Solution
Write a JavaScript program to create the dot products of two given 3D vectors.

Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Create the dot products of two given 3D vectors</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function dot_product(vector1, vector2) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))





ES6 Version:

function dot_product(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))



Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Create the dot products of two given 3D vectors</title>
</head>
<body>

</body>


js:



function dot_product(vector1, vector2) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))




 */