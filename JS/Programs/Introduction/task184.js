// JavaScript: Test whether an array of integers of length 2 does not contain 1 or a 3



/**
 * 
 * 
 * JavaScript Basic: Exercise-78 with Solution
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function is13(nums) {
  if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1){
      return true;
  } else {
      return false;
  }
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1])); 




ES6 Version:

function is13(nums) {
  if (!nums.includes(1) && !nums.includes(3)){
      return true;
  } else {
      return false;
  }
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1])); 


Live Demo:




function is13(nums) {
  if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1){
      return true;
  } else {
      return false;
  }
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1])); 



 */