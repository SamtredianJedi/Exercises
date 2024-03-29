// JavaScript: Limit a value inside a certain range



/**
 * 
 * 
 * JavaScript Math: Exercise-37 with Solution
Write a JavaScript function to limit a value inside a certain range.

Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.
Test Data :
console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));
12





HTML Code :

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to limit a value inside a certain range.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));



Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>JavaScript function to limit a value inside a certain range.</title>
</head>
<body>

</body>


js:



function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));










 */