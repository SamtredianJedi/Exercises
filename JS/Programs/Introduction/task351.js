// JavaScript: Convert an angle from degrees to radians

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-33 with Solution
Write a JavaScript function to convert an angle from degrees to radians.

Test Data :
console.log(degrees_to_radians(45));
0.7853981633974483

Use Math.PI and the degree to radian formula to convert the angle from degrees to radians.





Sample Solution-1:

JavaScript Code:

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

console.log(degrees_to_radians(45));





 */