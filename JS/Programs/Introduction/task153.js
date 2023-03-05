// JavaScript: Check whether a given number presents in the range 40..10000



/**
 * 
 * 
 * JavaScript Basic: Exercise-47 with Solution
Write a JavaScript program to check whether a given number is presents in the range 40..10000.
For example 40 presents in 40 and 4000.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether a given number is presents in the range 40..10000. </title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));



ES6 Version:

function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));


Live Demo:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range). </title>
</head>
<body>

</body>


js:



function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));



 */