// JavaScript: Find a value which is nearest to 100 from two different given integer values




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-32 with Solution
Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to find a value which is nearest to 100 from two different given integer values.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function near_100(x, y) {
  if (x != y)
  {
  x1 = Math.abs(x - 100);
  y1 = Math.abs(y - 100);

  if (x1 < y1)
  {
    return x;
  }
  if (y1 < x1)
  {
    return y;
  }
  return 0;
  }
  else
    return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));




ES6 Version:

function near_100(x, y) {
  if (x != y)
  {
  x1 = Math.abs(x - 100);
  y1 = Math.abs(y - 100);

  if (x1 < y1)
  {
    return x;
  }
  if (y1 < x1)
  {
    return y;
  }
  return 0;
  }
  else
    return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));


Live Demo:




function near_100(x, y) {
  if (x != y)
  {
  x1 = Math.abs(x - 100);
  y1 = Math.abs(y - 100);

  if (x1 < y1)
  {
    return x;
  }
  if (y1 < x1)
  {
    return y;
  }
  return 0;
  }
  else
    return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));


 */