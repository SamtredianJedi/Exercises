// JavaScript: Check whether a point lies strictly inside a given circle

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-120 with Solution
Write a JavaScript program to check whether a point lies strictly inside a given circle.

Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a point lies strictly inside a given circle</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));




ES6 Version:

function check_a_point(a, b, x, y, r) {
  var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
  r *= r;

  if (dist_points < r) {
    return true;
  }

  return false;
}

console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));

Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a point lies strictly inside a given circle</title>
</head>
<body>

</body>


js:



function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));





 */