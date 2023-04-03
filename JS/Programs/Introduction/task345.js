// JavaScript: Calculate degrees between 2 points with inverse Y axis

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-27 with Solution
Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.

Test Data :
console.log(pointDirection(1, 0, 12, 0));
0
console.log(pointDirection(1, 0, 1, 10));
90




HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to calculate degrees between 2 points with inverse Y axis</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));









 */