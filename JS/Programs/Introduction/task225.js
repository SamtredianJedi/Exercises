// JavaScript: Check whether a given number is in a given range

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-118 with Solution
Write a JavaScript program to check whether a given number is in a given range.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given number is in a given range</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function is_inrange(x, y, z) 
{
    return y >= x && y <= z;
}

console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));




ES6 Version:

function is_inrange(x, y, z) 
{
    return y >= x && y <= z;
}

console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));

Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given number is in a given range</title>
</head>
<body>

</body>

js:



function is_inrange(x, y, z) 
{
    return y >= x && y <= z;
}

console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));



 */