// JavaScript: Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-4 with Solution
Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>The area of a triangle</title>
</head>
<body>  
</body>
</html>

JavaScript Code:

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

Sample Output:

14.696938456699069
Explanation:
Calculate the area of a triangle of three given sides :
In geometry, Heron's formula named after Hero of Alexandria, gives the area of a triangle by requiring no arbitrary choice of side as base or vertex as origin, contrary to other formulas for the area of a triangle, such as half the base times the height or half the norm of a cross product of two sides.







The Math.sqrt() function is used to get the square root of a number. If the value of the number is negative, Math.sqrt() returns NaN.

ES6 Version:

const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);



var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);


 */