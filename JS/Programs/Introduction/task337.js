// JavaScript : Pythagorean function in JavaScript

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-19 with Solution
Create a Pythagorean function in JavaScript.

Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.

Test Data:
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));
Output :
4.47213595499958
5




HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Pythagorean Theorem</title>
</head>
<body></body>
</html>




JavaScript Code:

function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
return false; 
		return Math.sqrt(x * x + y * y);
	}

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));




Live Demo:


html:



<html>
<head>
<meta charset="utf-8">
<title>Pythagorean Theorem</title>
</head>
<body></body>



js:



function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
return false; 
    return Math.sqrt(x * x + y * y);
  }
​
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));
​







 */