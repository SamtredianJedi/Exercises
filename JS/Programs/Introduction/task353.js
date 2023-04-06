// JavaScript: The Pythagorean theorem

/**
 * 
 * 
 * JavaScript Math: Exercise-35 with Solution
Write a JavaScript function for the Pythagorean theorem.

According to Wikipedia : In mathematics, the Pythagorean theorem, also known as Pythagoras' theorem, is a relation in Euclidean geometry among the three sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides a, b and c, often called the "Pythagorean equation".

Test Data :
console.log(pythagorean(4, 3));
5





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function for the Pythagorean theorem</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(pythagorean(4, 3));





Live Demo:


html:

<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function for the Pythagorean theorem</title>
</head>
<body>

</body>



js:


function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
​
console.log(pythagorean(4, 3));








 */