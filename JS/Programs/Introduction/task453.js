// JavaScript: Remove a specific element from an array

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-31 with Solution
Write a JavaScript function to remove a specific element from an array.

Test data:
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to remove a specific element from an array</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function remove_array_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));







ES6 Version:

function remove_array_element(array, n)
 {
   const index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));


 */