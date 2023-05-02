// JavaScript: Get the last element of an array

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-4 with Solution
Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get last and last n elements of an array</title>
</head>
<body>
</body>
</html>






JavaScript Code:

var last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));







ES6 Version:

var last = function last(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));




Live Demo:

html:



<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get last and last n elements of an array</title>
</head>
<body>
</body>
</html>



js:




var last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));




 */