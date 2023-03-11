// JavaScript: Create an array of prefix sums of the given array

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-131 with Solution
Write a JavaScript program to create an array of prefix sums of the given array.

In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
...

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Create an array of prefix sums of the given array</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function prefix_sums(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }
  return new_arr;
}

console.log(prefix_sums([1, 2, 3, 4, 5]));

console.log(prefix_sums([1, 2, -3, 4, 5]));





ES6 Version:

function prefix_sums(arr) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (let j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }
  return new_arr;
}

console.log(prefix_sums([1, 2, 3, 4, 5]));

console.log(prefix_sums([1, 2, -3, 4, 5]));

Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Create an array of prefix sums of the given array</title>
</head>
<body>

</body>


js:




function prefix_sums(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }
  return new_arr;
}

console.log(prefix_sums([1, 2, 3, 4, 5]));

console.log(prefix_sums([1, 2, -3, 4, 5]));





 */