// JavaScript: Check whether a value is an integer or not

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-15 with Solution
Write a JavaScript function to check whether a value is an integer or not.

Test Data:
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
Output :
true
true
false
false
true





HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Check whether a value is an integer or not</title>
  </head>
  <body>
</body>
  </html>




  JavaScript Code:

function is_Int(num) {
  
   if (typeof num !== 'number')
       return false; 
  
  return !isNaN(num) && 
         parseInt(Number(num)) == num && 
         !isNaN(parseInt(num, 10));
}
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));




 */