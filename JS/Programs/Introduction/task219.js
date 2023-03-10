// JavaScript: Find the number of trailing zeros in the decimal representation of the factorial of a given number

/**
 * 
 * 
 * JavaScript Basic: Exercise-112 with Solution
Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of trailing zeros in the decimal representation of the factorial of a given number</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function trailing_zeros_factorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))




ES6 Version:

function trailing_zeros_factorial(n) {
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of trailing zeros in the decimal representation of the factorial of a given number</title>
</head>
<body>

</body>

js:



function trailing_zeros_factorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))


 */