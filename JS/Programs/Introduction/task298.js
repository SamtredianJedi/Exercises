// JavaScript: Compute the exponent of a number


/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-5 with Solution
Write a JavaScript program to compute the exponent of a number.

Note: The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.



Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Exponent of a number</title>
</head>
<body>

</body>
</html>




JavaScript Code:

var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));


 */