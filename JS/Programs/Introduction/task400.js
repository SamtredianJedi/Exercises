// JavaScript: Mean of all digits of a number


/**
 * 
 * 
 * 
 * 
 * JavaScript Math: Exercise-82 with Solution
Write a JavaScript program to calculate the mean of all the digits of a given number.

What is a Mean?
In mathematics, the mean represents the simple average of two or more numbers. There are several methods available for computing the mean of a set of numbers, including the arithmetic mean method, which uses the sum of the numbers in the series, and the geometric mean method, which is the average of a set of products.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Mean of all digits of a number</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n) {
	let arr_str = String(Math.abs(n)).split('');
	return arr_str.reduce((a,b)=>a+Number(b),0)/arr_str.length;
}

n = 11
console.log("n = "+n)
console.log("Mean of all digits of the said number: "+test(n));
n = 66
console.log("n = "+n)
console.log("Mean of all digits of the said number: "+test(n));
n = 336
console.log("n = "+n)
console.log("Mean of all digits of the said number: "+test(n));
n = 444
console.log("n = "+n)
console.log("Mean of all digits of the said number: "+test(n));
n = 1151
console.log("n = "+n)
console.log("Mean of all digits of the said number: "+test(n));



 */