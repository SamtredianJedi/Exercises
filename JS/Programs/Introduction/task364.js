// JavaScript: Calculate the divisor and modulus of two integers

/**
 * 
 * JavaScript Math: Exercise-46 with Solution
Write a JavaScript function to calculate the divisor and modulus of two integers.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the divisor and modulus of two integers</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function div_mod(a, b)
 {
  if (b <= 0) 
    throw new Error("b cannot be zero. Undefined.");
  if (isInt(a) && !isInt(b))
    throw new Error("A or B are not integers.");
  return [Math.floor(a / b), a % b];
}
function isInt(n) {
  return n % 1 === 0;
}
console.log(div_mod(17, 4));






 * 
 */