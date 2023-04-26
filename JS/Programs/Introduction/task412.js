// JavaScript: Even, odd numbers and their sum in an array

/**
 * 
 * 
 * JavaScript Math: Exercise-94 with Solution
Write a JavaScript program to calculate the sum and count of even and odd numbers in an array.

Test Data:
([1,2,3,4,5,6,7]) -> 3,12, 4,16
([2,3,5,1,2,0,3,4,2,3,4)] -> 6,14, 5,15






HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Even, odd numbers and their sum in an array</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(nums) {
  let even=0, odd=0;
  nums.forEach(number => {
  if (number % 2 === 0) 
    even++;
  else
    odd++;
  });
  return [even,
    nums.reduce((s, v) => (!(v % 2) ? s + v : s), 0), odd,
    nums.reduce((s, v) => (v % 2 ? s + v : s), 0)];
}

nums = [1, 2, 3, 4, 5, 6, 7]
console.log("Original array: "+nums)
result = test(nums)
console.log("Number of even numbers and their sum: "+result[0]+","+result[1]);
console.log("Number of odd numbers and their sum: "+result[2]+","+result[3]);
nums = [2,3,5,1,2,0,3,4,2,3,4]
console.log("Original array: "+nums)
result = test(nums)
console.log("Number of even numbers and their sum: "+result[0]+","+result[1]);
console.log("Number of odd numbers and their sum: "+result[2]+","+result[3]);



 */