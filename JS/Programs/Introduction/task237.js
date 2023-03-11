// JavaScript: Find the smallest prime number strictly greater than a given number

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-129 with Solution
Write a JavaScript program to find the smallest prime number strictly greater than a given number.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the smallest prime number strictly greater than a given number</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function next_Prime_num(num) {
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));




ES6 Version:

function next_Prime_num(num) {
    for (let i = num + 1;; i++) {
        let isPrime = true;
        for (let d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));

Live Demo:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the smallest prime number strictly greater than a given number</title>
</head>
<body>

</body>


js:



function next_Prime_num(num) {
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));




 */