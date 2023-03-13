// JavaScript: Swap pairs of adjacent digits of a given integer of even length




/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-150 with Solution
Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.





Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Swap pairs of adjacent digits of a given integer of even length.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function swap_adjacent_digits(n)
{
   if (n.toString().length%2!=0)
     {
       return false;
     }
  var result = 0,
		x = 1;
	while (n != 0) {
		var dg1 = n % 10,
			dg2 = ((n - dg1) / 10) % 10;
		result += x * (10 * dg1 + dg2);
		n = Math.floor(n / 100);
		x *= 100;
	}
	return result;
}
console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));





ES6 Version:

function swap_adjacent_digits(n) {
  if (n.toString().length % 2 != 0) {
    return false;
  }

  var result = 0,
      x = 1;

  while (n != 0) {
    var dg1 = n % 10,
        dg2 = (n - dg1) / 10 % 10;
    result += x * (10 * dg1 + dg2);
    n = Math.floor(n / 100);
    x *= 100;
  }

  return result;
}

console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));

Live Demo:


html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Swap pairs of adjacent digits of a given integer of even length</title>
</head>
<body>

</body>


js:




function swap_adjacent_digits(n) {
  if (n.toString().length % 2 != 0) {
    return false;
  }

  var result = 0,
      x = 1;

  while (n != 0) {
    var dg1 = n % 10,
        dg2 = (n - dg1) / 10 % 10;
    result += x * (10 * dg1 + dg2);
    n = Math.floor(n / 100);
    x *= 100;
  }

  return result;
}

console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));





 */