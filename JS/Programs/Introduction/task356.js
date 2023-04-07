// JavaScript: Check if a number is a whole number or has a decimal place


/**
 * 
 * 
 * 
 * JavaScript Math: Exercihse-38 with Solution
Write a JavaScript function to check if a number is a whole number or has a decimal place.

Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
Test Data :
console.log(number_test(25.66));
"Number has a decimal place."
console.log(number_test(10));
"It is a whole number."





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check if a number is a whole number or has a decimal place</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function number_test(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return 'Number has a decimal place.';
   else
     return 'It is a whole number.';
  }

console.log(number_test(25.66));

console.log(number_test(10));



 */