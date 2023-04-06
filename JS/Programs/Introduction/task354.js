// JavaScript: Return values that are powers of two

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-36 with Solution
Write a JavaScript function which will return values that are powers of two.

Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function which will return values that are powers of two</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function isPower_of_two(num)
  {
     return num && (num & (num - 1)) === 0;
}

console.log(isPower_of_two(64));  
console.log(isPower_of_two(94));




 */