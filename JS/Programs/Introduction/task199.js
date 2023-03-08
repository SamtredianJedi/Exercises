// JavaScript: Find the maximum difference among all possible pairs of a given array of integers

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-93 with Solution
Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximum difference among all possible pairs of a given array of integers.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function array_max_diff(arr) {

    var max_result = 0;

    for(var i=0;i<arr.length;i++)
       {
        for(var k=0; k!=i && k<arr.length; k++)
        {
            var diff = Math.abs(arr[i]-arr[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))




ES6 Version:

function array_max_diff(arr) {

    let max_result = 0;

    for(let i=0;i<arr.length;i++)
       {
        for(let k=0; k!=i && k<arr.length; k++)
        {
            const diff = Math.abs(arr[i]-arr[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))



Live Demo:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximal difference among all possible pairs of a given array of integers</title>
</head>
<body>

</body>


js:




function array_max_diff(arr) {

    var max_result = 0;

    for(var i=0;i<arr.length;i++)
       {
        for(var k=0; k!=i && k<arr.length; k++)
        {
            var diff = Math.abs(arr[i]-arr[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))



 */