// JavaScript: Find the Greatest Common Divisor or GCD of more than 2 integers

/**
 * 
 * 
 * JavaScript Math: Exercise-9 with Solution
Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.

Test Data:
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3
5




HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>GCD (greatest common divisor) of more than 2 integers</title>
</head>
<body>
</body>
</html>






JavaScript Code:

function gcd_more_than_two_numbers(input) {
  if (toString.call(input) !== "[object Array]")  
        return  false;  
  var len, a, b;
	len = input.length;
	if ( !len ) {
		return null;
	}
	a = input[ 0 ];
	for ( var i = 1; i < len; i++ ) {
		b = input[ i ];
		a = gcd_two_numbers( a, b );
	}
	return a;
}

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));




 */