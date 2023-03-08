// JavaScript: Test whether a given array of integers contains 30 or 40 twice



/**
 * 
 * 



JavaScript Basic: Exercise-79 with Solution
Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function twice3040(arra1) {
    let a = arra1[0],
        b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));




ES6 Version:

function twice3040(arra1) {
    let a = arra1[0];
    let b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));


Live Demo:



function twice3040(arra1) {
    let a = arra1[0],
        b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));



 */