// JavaScript: Create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1



/**
 * 
 * 
 * JavaScript Basic: Exercise-76 with Solution
Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function started(nums) {
     var array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);

     return array1;
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78])); 




ES6 Version:

function started(nums) {
     const array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);

     return array1;
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));


Live Demo:


function started(nums) {
     var array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);

     return array1;
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78])); 
 */