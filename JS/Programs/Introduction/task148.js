// JavaScript: Check whether three given numbers are increasing in strict mode or in soft mode

/**
 * 
 * 
 * JavaScript Basic: Exercise-42 with Solution
Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));




ES6 Version:

function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));



Live Demo:




function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));


 */