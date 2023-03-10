// JavaScript: Calculate the sum of n + n/2 + n/4 + n/8 + ....

/**
 * 
 * 
 * JavaScript Basic: Exercise-113 with Solution
Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Calculate the sum of n + n/2 + n/4 + n/8 + ....</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))




ES6 Version:

function int_sum(num) {
    let s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Calculate the sum n + n/2 + n/4 + n/8 + ....</title>
</head>
<body>

</body>


js:



function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))



 */