// JavaScript: Third smallest number of an array of numbers


/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-49 with Solution
Write a JavaScript program that takes an array of numbers and returns the third smallest number.

Test Data:

(2,3,5,7,1) -> 3
(2,3,0,5,7,8,-2,-4) -> 0






JavaScript Code :

function test(arr_nums) 
 {
  return arr_nums.sort((x,y) => y - x)[arr_nums.length-3]
}

nums = [2, 3, 5, 7, 1]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));
nums = [2, 3, 0, 5, 7, 8, -2, -4]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));








Live Demo :


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Third smallest number of an array of numbers</title>
</head>
<body>

</body>
</html>


js:




function test(arr_nums) 
 {
  return arr_nums.sort((x,y) => y - x)[arr_nums.length-3]
}
​
nums = [2, 3, 5, 7, 1]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));
nums = [2, 3, 0, 5, 7, 8, -2, -4]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));
​



 */