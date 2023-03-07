// JavaScript: Check whether 1 appears in first or last position of a given array of integers

/**
 * 
 * 
 * JavaScript Basic: Exercise-71 with Solution
Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));




ES6 Version:

function first_last_1(nums)
{
  const end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));



Live Demo:


function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));


 */