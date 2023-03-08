// JavaScript: Check whether two given integers are similar or not

/**
 * 
 * 
 * JavaScript Basic: Exercise-88 with Solution
Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether two given integers are similar or not</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function checking_numbers(x, y, divisor) {
  if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
    0) {
    return true;
  }
  return false;
}

console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))




ES6 Version:

function checking_numbers(x, y, divisor) {
  if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
    0) {
    return true;
  }
  return false;
}

console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))


Live Demo:



html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether two given integers are similar or not</title>
</head>
<body>

</body>


js:




function checking_numbers(x, y, divisor) {
  if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
    0) {
    return true;
  }
  return false;
}

console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))



 */