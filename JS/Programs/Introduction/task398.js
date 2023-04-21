// JavaScript: Check an integer is Repdigit number or not



/**
 * 
 * 
 * JavaScript Math: Exercise-80 with Solution
Write a JavaScript program to check whether a given integer is a Repdigit or not.

From Wikipedia -
In recreational mathematics, a repdigit or sometimes monodigit is a natural number composed of repeated instances of the same digit in a positional number system (often implicitly decimal). The word is a portmanteau of repeated and digit. Examples are 11, 666, 4444, and 999999.







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to check an integer is Repdigit number or not</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n) {
	return new Set('' + n).size === 1
}

n = 11
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 66
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 336
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 444
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 1151
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));






Live Demo:


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Check an integer is Repdigit number or not</title>
</head>
<body>

</body>
</html>



js:



function test(n) {
	return new Set('' + n).size === 1
}

n = 11
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 66
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 336
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 444
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));
n = 1151
console.log("n = "+n)
console.log("Check the said number is Repdigit: "+test(n));




 */