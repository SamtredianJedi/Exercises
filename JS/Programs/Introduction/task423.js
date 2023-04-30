// JavaScript array - Exercises, Practice, Solution



/**
 * 
 * JavaScript: Get the first element of an array
 * 
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-1 with Solution
Write a JavaScript function to check whether an 'input' is an array or not.

Test Data:
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true








HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS Bin</title>
</head>
<body>
</body>
</html>






JavaScript Code:

var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));







ES6 Version:

var is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));





Live Demo:


js:




is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


 * 
 * 
 * 
 * 
 */