// JavaScript: Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence



/**
 * 


JavaScript Basic: Exercise-122 with Solution
Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))





ES6 Version:

function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    const num_direction = num[1] - num[0];
    for (let i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))



Live Demo:


html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence</title>
</head>
<body>

</body>


js:





function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))







 */