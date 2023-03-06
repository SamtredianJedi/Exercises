// JavaScript: Check whether the characters a and b are separated by exactly 3 places anywhere in a given string



/**
 * 
 * 
 * JavaScript Basic: Exercise-53 with Solution
Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));




ES6 Version:

function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));


Live Demo:



function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));


 */