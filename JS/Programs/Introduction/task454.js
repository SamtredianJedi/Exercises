// JavaScript: Find if an array contains a specific element





/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-32 with Solution
Write a JavaScript function to find an array containing a specific element.

Test data:
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]









HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to find if an array contains a specific element</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));








ES6 Version:

function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));







Live Demo:


js:




function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));




 */