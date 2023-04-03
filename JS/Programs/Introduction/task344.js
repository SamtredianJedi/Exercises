// JavaScript: Calculate the nth root of a number

/**
 * 


JavaScript Math: Exercise-26 with Solution
Write a JavaScript function to calculate the nth root of a number.

Test Data :
console.log(nthroot(64, 2));
8
console.log(nthroot(64, -2));
0.125




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the nth root of a number</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);
  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
   }
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));



Live Demo:




html:


<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the nth root of a number</title>
</head>
<body>
​
</body>



js:




function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);
  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
   }
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));



 */