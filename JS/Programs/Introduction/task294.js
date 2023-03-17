// JavaScript: Find the greatest common divisor of two positive numbers



/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-2 with Solution
Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.



Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Recursive function to find the GCD of two numbers</title>
</head>
<body>

</body>
</html>




JavaScript Code:

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));




Live Demo:

html:




<head>
  <meta charset="utf-8">
  <title>Recursive function to find the GCD of two numbers</title>
</head>
<body>

</body>




js:




var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
​
    return gcd(b, a % b);
};
console.log(gcd(2154, 458));


 */