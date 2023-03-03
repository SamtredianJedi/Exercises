// JavaScript: Compute the absolute difference between a specified number and 19




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-17 with Solution
Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to compute the absolute difference between a specified number and 19.  Returns triple their absolute difference if the specified number is greater than 19.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));



ES6 Version:

function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));



Live Demo:



function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));


 */