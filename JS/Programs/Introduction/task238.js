// JavaScript: Find the number of even digits in a given integer

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-130 with Solution
Write a JavaScript program to find the number of even digits in a given integer.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of even digits in a given integer</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function even_digits(num) {
  var ctr = 0;
  while (num) {
    ctr += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return ctr;
}

console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));




ES6 Version:

function even_digits(num) {
  let ctr = 0;
  while (num) {
    ctr += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return ctr;
}

console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));


Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of even digits in a given integer</title>
</head>
<body>

</body>


js:




function even_digits(num) {
  var ctr = 0;
  while (num) {
    ctr += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return ctr;
}

console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));


 */