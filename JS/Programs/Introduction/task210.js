// JavaScript: Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer

/**
 * 
 * 
 * JavaScript Basic: Exercise-104 with Solution
Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));






ES6 Version:

function different_values(ara, n) {
    let max_val = -1;
    for (let i = 0; i < ara.length; i++) {
        for (let j = i + 1; j < ara.length; j++) {
            const x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));



Live Demo:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer</title>
</head>
<body>

</body>

js:




function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));


 */