// JavaScript: Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-105 with Solution
Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function digit_to_one(num) {

    var digitSum = function(num) {

        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))





ES6 Version:

function digit_to_one(num) {

    const digitSum = num => {

        let digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    let result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))

Live Demo:

html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number</title>
</head>
<body>

</body>


js:



function digit_to_one(num) {

    var digitSum = function(num) {

        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))





 */