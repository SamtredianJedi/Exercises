// // JavaScript Recursion - Exercises, Practice, Solution



// JavaScript: Calculate the factorial of a number



/**
 * 
 * 
 * 
 * 
 JavaScript Function: Exercise-1 with Solution
Write a JavaScript program to calculate the factorial of a number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120




Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculate the factorial of a number.</title>
</head>
<body>
</body>
</html>




JavaScript Code:

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));


 */