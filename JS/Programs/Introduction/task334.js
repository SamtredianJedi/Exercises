// JavaScript: Check whether a variable is numeric or not



/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-16 with Solution
Write a JavaScript function to check whether a variable is numeric or not.

Test Data:
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
Output:
true
false
true
false
true
true




HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Check whether a variable is numeric or not</title>
  </head>
  <body>
</body>
  </html>


  


  JavaScript Code:

function is_Numeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));




Live Demo:


html:



 <head>
  <meta charset="utf-8">
  <title>Check whether a variable is numeric or not</title>
  </head>
  <body>
</body>



js:




function is_Numeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
​
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));







 */