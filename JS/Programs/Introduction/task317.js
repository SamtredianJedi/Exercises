// JavaScript: Compute the greatest common divisor (GCD) of two positive integers

/**
 * 
 * 
 * 
 * 
 * JavaScript Conditional Statement and loops: Exercise-11 with Solution
Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.




Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>compute the greatest common divisor (GCD) of two positive integers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);



 */