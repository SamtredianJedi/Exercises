// JavaScript: Swap the first and last elements of a given array of integers

/**
 * 
 * 
 * JavaScript Basic: Exercise-80 with Solution
Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to swap the first and last elements of a given array of integers. The array length should be  at least 1.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 



ES6 Version:

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 


Live Demo:



function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 



 */