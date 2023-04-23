// JavaScript: Sum of the Two highest Numbers

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-84 with Solution
Write a JavaScript program to calculate the sum of the two highest positive numbers in a given array.

Test Data:
([1,2,6,3,4,5,6,7]) ->13
([2,3,4,5]) -> 9







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Sum of the Two highest Numbers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test(nums) {
  return nums.filter((el) => el >= 0)
    .sort((x, y) => x - y)
    .slice(-2)
    .reduce((acc, el) => acc + el);
}
nums = [1,2,6,3,4,5,6,7]
console.log("nums = "+nums)
console.log("Sum of the two highest numbers of the said array: "+test(nums));
nums = [2,3,4,5]
console.log("nums = "+nums)
console.log("Sum of the two highest numbers of the said array: "+test(nums));



 */