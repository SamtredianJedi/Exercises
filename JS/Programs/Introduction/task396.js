// JavaScript: Nth Tetrahedral Number

/**
 * 
 * 
 * 
 * 
 * JavaScript Math: Exercise-78 with Solution
Write a JavaScript program that takes an integer n and return the nth Tetrahedral number.

A tetrahedral number, or triangular pyramidal number, is a figurate number that represents a pyramid with a triangular base and three sides, called a tetrahedron. The formula for the nth tetrahedral number is represented by the 3rd rising factorial of n divided by the factorial of 3:



The tetrahedral numbers are:
1, 4, 10, 20, 35, 56, 84, 120, 165, 220, ...
Test Data:
(1) -> 1
(2) -> 4
(3) -> 10
(4) -> 20
(5) -> 35





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Nth Tetrahedral Number</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n) {
return n*(n+1)*(n+2)/6
}
n = 1
console.log("n = "+n)
console.log("nth Tetrahedral number = "+test(n));
n = 2
console.log("n = "+n)
console.log("nth Tetrahedral number = "+test(n));
n = 3
console.log("n = "+n)
console.log("nth Tetrahedral number = "+test(n));
n = 4
console.log("n = "+n)
console.log("nth Tetrahedral number = "+test(n));
n = 5
console.log("n = "+n)
console.log("nth Tetrahedral number = "+test(n));



 */