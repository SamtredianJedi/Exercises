// JavaScript: Divide an integer by another integer as long as the result is an integer and return the result



/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-106 with Solution
Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Divide an integer by another integer as long as the result is an integer and return the result</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function divide_digit(num, d) {
       if (d==1)
         return num;
       else
       {
      while (num % d === 0) {
        num /= d;
        }
    return num;
       }
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))




ES6 Version:

function divide_digit(num, d) {
       if (d==1)
         return num;
       else
       {
      while (num % d === 0) {
        num /= d;
        }
    return num;
       }
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))

Live Demo:

html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Divide an integer by another integer as long as the result is an integer and return the result</title>
</head>
<body>

</body>


js:




function divide_digit(num, d) {
       if (d==1)
         return num;
       else
       {
      while (num % d === 0) {
        num /= d;
        }
    return num;
       }
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))


 */