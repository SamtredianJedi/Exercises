// JavaScript: Reverse the elements of a given array of integers length 3

/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-73 with Solution
Write a JavaScript program to reverse the elements of a given array of integers length 3.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to reverse the elements of a given array of integers length 3.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));




ES6 Version:

function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));


Live Demo:



function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));



 */