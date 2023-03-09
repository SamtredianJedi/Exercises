// JavaScript: Find the maximum number from a given positive integer by deleting exactly one digit of the given number

/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-103 with Solution
Write a JavaScript program to find the maximum number from a given positive integer by deleting exactly one digit of the given number.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the maximum number from a given positive integer by deleting exactly one digit of the given number</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function digit_delete(num) {
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245)); 




ES6 Version:

function digit_delete(num) {
    let result = 0;
    const num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let index_num = 0; index_num < num_digits.length; index_num++) {
        let n = 0;
        for (let i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the maximal number from a given positive integer by deleting exactly one digit of the given number</title>
</head>
<body>

</body>

js:




function digit_delete(num) {
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));






 */