// JavaScript: Compute the sum of the two given integers



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-39 with Solution
Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80  return 65 other wise return 80.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));





ES6 Version:

function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));



Live Demo:




function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));


 */