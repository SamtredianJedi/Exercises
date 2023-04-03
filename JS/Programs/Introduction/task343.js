// JavaScript: Currency math (add, subtract, multiply, division etc.)

/**
 * 
 * 
 * JavaScript Math: Exercise-25 with Solution
Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

Test Data :
n1 = '$40.24', n2 = '$21.57';





HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).</title>
</head>
<body>

</body>
</html>





JavaScript Code:

var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));






Live Demo:



html:



<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).</title>
</head>
<body>

</body>



js:




var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));








 */