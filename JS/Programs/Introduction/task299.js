// JavaScript: Get the first n Fibonacci numbers



/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-6 with Solution
Write a JavaScript program to get the first n Fibonacci numbers.

Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.







Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Fibonacci Series</title>
</head>
<body>

</body>
</html>




JavaScript Code:

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));




 Live Demo:


 html:




 <head>
  <meta charset="utf-8">
  <title>Fibonacci Series</title>
</head>
<body>

</body>



js:





var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
 



 */