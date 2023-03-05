// JavaScript: Check from three given numbers that two or all of them have the same rightmost digit

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-43 with Solution
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check from three  given numbers (non negative integers) that two  or all of them have the same rightmost digit.</title>
</head>
<body>
</body>
</html>



JavaScript Code:

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));




ES6 Version:

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));v


Live Demo:


function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));


 */