// JavaScript: Check whether two given integer values are in the range 50..99




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-28 with Solution
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));




ES6 Version:

function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));




Live Demo:




function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));



 */