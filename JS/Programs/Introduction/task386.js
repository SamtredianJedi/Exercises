// JavaScript: Sum of the digits of a number

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-68 with Solution
Write a JavaScript program to calculate the sum of the digits of a given number.

In mathematics, the digit sum of a natural number in a given number base is the sum of all its digits. For example, the digit sum of the decimal number 6098 would be 6+0+9+8=23.




Sample Solution-1:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to sum of the digits of a number</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function sum_Of_Digits(n) {
  if (n < 0) n = -n
  let result = 0

  while (n > 0) 
   {
    result += n % 10
    n = Math.floor(n / 10)
  }

  return result
}
console.log(sum_Of_Digits(6098))
console.log(sum_Of_Digits(-501))
console.log(sum_Of_Digits(2546))







Live Demo:


html:



HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to sum of the digits of a number</title>
</head>
<body>

</body>
</html>


js:


function sum_Of_Digits(n) {
  if (n < 0) n = -n
  let result = 0

  while (n > 0) 
   {
    result += n % 10
    n = Math.floor(n / 10)
  }

  return result
}
console.log(sum_Of_Digits(6098))
console.log(sum_Of_Digits(-501))
console.log(sum_Of_Digits(2546))





 */