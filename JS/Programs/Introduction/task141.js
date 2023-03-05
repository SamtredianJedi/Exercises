// JavaScript: Check whether the last digit of the three given positive integers is same





/**
 * 
 * 
 * JavaScript Basic: Exercise-36 with Solution
Write a JavaScript program to check whether the last digit of the three given positive integers is same.





Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether the last digit of the three given positive integers is same.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));




ES6 Version:

function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));




Live Demo:




function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
    return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10);
   }
  else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));




 */