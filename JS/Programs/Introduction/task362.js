// JavaScript: Show the Hamming numbers

/**
 * 
 * 
 * JavaScript Math: Exercise-44 with Solution
Write a JavaScript function to show the first twenty Hamming numbers.

Hamming Numbers are numbers whose only prime factors are 2, 3 and 5.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to show the Hamming numbers</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function Hamming(n) {
        var succession = [1];
        var length = succession.length;
        var candidate = 2;
        while (length < n) {
            if (isHammingNumber(candidate)) {
                succession[length] = candidate;
                length++;
            }
            candidate++;
        }
        return succession;
  }
 function isHammingNumber(num) {
        while (num % 5 === 0) num /= 5;
        while (num % 3 === 0) num /= 3;
        while (num % 2 === 0) num /= 2;

        return num == 1;
    }

console.log(Hamming(20));



 */