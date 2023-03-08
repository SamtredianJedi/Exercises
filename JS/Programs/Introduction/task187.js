// 

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-81 with Solution
Write a JavaScript program to add two digits of a given positive integer of length two.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to add two digits of a given positive integer of length two.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(25))
console.log(add_two_digits(50))




ES6 Version:

function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(25))
console.log(add_two_digits(50))



html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to add two digits of a given positive integer of length two.</title>
</head>
<body>

</body>

js:




function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(25))
console.log(add_two_digits(50))



 */