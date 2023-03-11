// JavaScript: Check whether a given fraction is proper or not

/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-133 with Solution
Write a JavaScript program to check whether a given fraction is proper or not.

Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether a given fraction is proper or not</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function proper_improper_test(num) {
  return Math.abs(num[0] / num[1]) < 1
    ? "Proper fraction."
    : "Improper fraction.";
}
console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));





ES6 Version:

function proper_improper_test(num) {
  return Math.abs(num[0] / num[1]) < 1
    ? "Proper fraction."
    : "Improper fraction.";
}
console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));


Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether a given fraction is proper or not</title>
</head>
<body>

</body>


js:




function proper_improper_test(num) {
  return Math.abs(num[0] / num[1]) < 1
    ? "Proper fraction."
    : "Improper fraction.";
}
console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));



 */