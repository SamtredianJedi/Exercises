// JavaScript: Sum of oddly divisible numbers from a range

/**
 * 
 * 
 * JavaScript Math: Exercise-89 with Solution
Write a JavaScript program that takes three arguments x, y, n and calculates the sum of the numbers oddly divided by n from the range x, y inclusive.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Sum of oddly divisible numbers from a range</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test(x,y,n) {
	let num_sum = 0;
	for (let i = x; i <= y; i++) {
		num_sum += i % n === 0 ? i : 0;
	}
  return num_sum
}
x = 1
y = 5
n = 3
console.log("Range: "+x+"-"+y)
console.log("Divisible number: "+n)
console.log("Sum of oddly divisible numbers from a the said range: "+test(x, y, n))
x = 100
y = 1000
n = 5
console.log("Range: "+x+"-"+y)
console.log("Divisible number: "+n)
console.log("Sum of oddly divisible numbers from a the said range: "+test(x, y, n))


Live Demo:


html:


<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Sum of oddly divisible numbers from a range</title>
</head>
<body>

</body>
</html>


js:



function test(x,y,n) {
	let num_sum = 0;
	for (let i = x; i <= y; i++) {
		num_sum += i % n === 0 ? i : 0;
	}
  return num_sum
}
x = 1
y = 5
n = 3
console.log("Range: "+x+"-"+y)
console.log("Divisible number: "+n)
console.log("Sum of oddly divisible numbers from a the said range: "+test(x, y, n))
x = 100
y = 1000
n = 5
console.log("Range: "+x+"-"+y)
console.log("Divisible number: "+n)
console.log("Sum of oddly divisible numbers from a the said range: "+test(x, y, n))



 */