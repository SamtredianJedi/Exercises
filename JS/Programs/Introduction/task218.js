// JavaScript: Check a number from three given numbers where two numbers are equal, find the third one

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-111 with Solution
Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check a number from three given numbers where two numbers are equal, find the third one</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function find_third_number(x, y, z) {
   if((x!==y) && (x!==z) && (y!==z))
    return "Three numbers are unequal.";
	if(x==y) return z;
	if(x==z) return y;
	return x;
}

console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))





ES6 Version:

function find_third_number(x, y, z) {
   if((x!==y) && (x!==z) && (y!==z))
    return "Three numbers are unequal.";
	if(x==y) return z;
	if(x==z) return y;
	return x;
}

console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check a number from three given numbers where two numbers are equal, find the third one</title>
</head>
<body>

</body>

js:



function find_third_number(x, y, z) {
   if((x!==y) && (x!==z) && (y!==z))
    return "Three numbers are unequal.";
	if(x==y) return z;
	if(x==z) return y;
	return x;
}

console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))


 */