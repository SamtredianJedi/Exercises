// JavaScript: Reverse the bits of a given 16 bits unsigned short integer



/**
 * 
 * 
 * 
 * avaScript Basic: Exercise-138 with Solution
Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Reverse the bits of a given 16 bits unsigned short integer</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function sixteen_bits_reverse(num) {
	var result = 0;
	for (var i = 0; i < 16; i++) 
    {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	return result;
}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));



ES6 Version:

function sixteen_bits_reverse(num) {
	let result = 0;
	for (let i = 0; i < 16; i++) 
    {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	return result;
}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));

Live Demo:


html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Reverse the bits of a given 16 bits unsigned short integer</title>
</head>
<body>

</body>

js:


function sixteen_bits_reverse(num) {
	var result = 0;
	for (var i = 0; i < 16; i++) 
    {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	return result;
}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));


 */