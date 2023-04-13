// JavaScript: Check if a given number is a power of 10

/**
 * 
 * 
 * JavaScript Math: Exercise-54 with Solution
Write a JavaScript program to check if a given number is a power of 10.
Math.log10() and the modulo operator (%) determines if num is a power of 10.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check if a  given number is a power of 10</title>
</head>
<body>

</body>
</html>



JavaScript Code:

const is_Power_Of_Ten = num => Math.log10(num) % 1 === 0;
console.log(is_Power_Of_Ten(1));
console.log(is_Power_Of_Ten(10));
console.log(is_Power_Of_Ten(30));
console.log(is_Power_Of_Ten(100));
console.log(is_Power_Of_Ten(90));
console.log(is_Power_Of_Ten(1000));





 */