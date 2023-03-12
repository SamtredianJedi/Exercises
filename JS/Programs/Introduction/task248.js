// JavaScript: Find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-139 with Solution
Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.

Note: A round number is informally considered to be an integer that ends with one or more zeros.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function find_rightmost_round_number(input_arr) {

  var result = 0;
  for (var i = 0; i < input_arr.length; i++)
  {
    if (input_arr[i] % 10 === 0) {
      result = i;
    }
  }

  return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));



ES6 Version:

function find_rightmost_round_number(input_arr) {

  let result = 0;
  for (let i = 0; i < input_arr.length; i++)
  {
    if (input_arr[i] % 10 === 0) {
      result = i;
    }
  }

  return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));

Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number</title>
</head>
<body>

</body>


js:


function find_rightmost_round_number(input_arr) {

  var result = 0;
  for (var i = 0; i < input_arr.length; i++)
  {
    if (input_arr[i] % 10 === 0) {
      result = i;
    }
  }

  return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));



 */