// JavaScript: Get the largest even number from an array of integers



/**
 * 
 * 
 * JavaScript Basic: Exercise-126 with Solution
Write a JavaScript program to get the largest even number from an array of integers.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Get the largest even number from an array of integers</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));





ES6 Version:

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (let i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));


Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Get the largest even number from an array of integers</title>
</head>
<body>

</body>


js:




function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));


 */