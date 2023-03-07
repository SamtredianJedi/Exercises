// JavaScript: Rotate the elements left of a given array of integers of length 3



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-70 with Solution
Write a JavaScript program to rotate the elements left of a given array of integers of length 3.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to rotate the elements left of a given array of integers of length 3.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5])); 




ES6 Version:

function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5]));

Live Demo:




function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5]));


 */