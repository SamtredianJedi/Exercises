// JavaScript: Check if an array is a factor chain


/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-51 with Solution
Write a JavaScript program to check if an array is a factor chain or not.

A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
[2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32





JavaScript Code :

function test(nums) { 
  for (var i = 0; i < nums.length - 1; i++) 
  {
    if (nums[i+1] % nums[i] != 0) {
      return false;            
    }
  }
  return true;
}
nums = [2, 4, 8, 16, 32]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 64]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 68]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));






Live Demo :


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Check if an array is a factor chain</title>
</head>
<body>
​
</body>
</html>


js:




function test(nums) { 
  for (var i = 0; i < nums.length - 1; i++) 
  {
    if (nums[i+1] % nums[i] != 0) {
      return false;            
    }
  }
  return true;
}
nums = [2, 4, 8, 16, 32]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 64]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 68]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));



 */