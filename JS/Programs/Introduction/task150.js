// JavaScript: Check from three given integers that whether a number is greater than or equal to 20 and less than one of the others



/**
 * 
 * 
 * JavaScript Basic: Exercise-44 with Solution
Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.



Sample Solution:

HTML Code:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));




Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.</title>
</head>
<body>

</body>


js:

function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
​
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));
​



 */