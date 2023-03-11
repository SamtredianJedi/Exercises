// JavaScript: Find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-123 with Solution
Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.



Sample Solution:

HTML Code:





<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));




ES6 Version:

function is_permutation(input_arr, n) {
    for (let i = 0; i < n; i++) {
        if (!input_arr.includes(i + 1)) 
          return false;
    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));

Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find if the members of an given array of integers is a permutation of numbers from 1 to a given integer</title>
</head>
<body>

</body>

js:



function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));


 */