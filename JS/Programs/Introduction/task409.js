// JavaScript: Sum of all odds in a matrix

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-91 with Solution
Write a JavaScript program to calculate the sum of all odd elements in a square matrix.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Sum of all odds in a matrix</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function test(nums) {
    return nums.reduce((b,a) => [...b,...a], []).reduce((b,a) => !(a%2) ? b: a+b , 0)
}
nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ]
console.log("Sum of all odds of the said matrix: "+test(nums));
nums = [
        [-1, -2],
        [-4, -5]
       ]
console.log("Sum of all odds of the said matrix: "+test(nums));






Live Demo:

html:


<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Sum of all odds in a matrix</title>
</head>
<body>
​
</body>
</html>

js:



function test(nums) {
    return nums.reduce((b,a) => [...b,...a], []).reduce((b,a) => !(a%2) ? b: a+b , 0)
}
nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ]
console.log("Sum of all odds of the said matrix: "+test(nums));
nums = [
        [-1, -2],
        [-4, -5]
       ]
console.log("Sum of all odds of the said matrix: "+test(nums));
​


 */