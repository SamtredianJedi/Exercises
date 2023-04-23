// JavaScript: Sum of the main diagonal elements of a square matrix

/**
 * 
 * 
 * 
 * 
 * JavaScript Math: Exercise-85 with Solution
Write a JavaScript program to compute the sum of the main diagonal elements of a square matrix.

In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns, which is used to represent a mathematical object or a property of such an object.
An m × n matrix: the m rows are horizontal and the n columns are vertical





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Sum of the main diagonal elements of a square matrix</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(nums) {
    return nums.reduce((x,y,i)=>x+y[i],0);
}
nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ]
console.log("Sum of the main diagonal elements of the said square matrix: "+test(nums));
nums = [
        [-1, -2],
        [-4, -5]
       ]
console.log("Sum of the main diagonal elements of the said square matrix: "+test(nums));



 */