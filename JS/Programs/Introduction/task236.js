// JavaScript: Find the smallest round number that is not less than a given value



/**
 * 
 * 
 * 
 JavaScript Basic: Exercise-128 with Solution
Write a JavaScript program to find the smallest round number that is not less than a given value.

Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the smallest round number that is not less than a given value</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));




ES6 Version:

function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));


Live Demo:


html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the smallest round number that is not less than a given value</title>
</head>
<body>

</body>



js:




function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));


 */