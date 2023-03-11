// JavaScript: Create the value of NOR of two given booleans



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-124 with Solution
Write a JavaScript program to create the value of NOR of two given booleans.

Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false

Sample Example:

For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Create the value of NOR of two given booleans</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function test_logical_Nor(a, b) {
  return (!a && !b)
}
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));




ES6 Version:

function test_logical_Nor(a, b) {
  return (!a && !b)
}
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));


Live Demo:


html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Create the value of NOR of two given booleans</title>
</head>
<body>

</body>
</html>


js:




function test_logical_Nor(a, b) {
  return (!a && !b)
}
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));


 */