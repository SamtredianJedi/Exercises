// JavaScript: Bigger elements in an array

/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-19 with Solution
Write a JavaScript function that returns array elements larger than a number.

Sample Solution: -

HTML Code :

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Bigger elements in an array</title>
</head>
<body>
  
</body>
</html>

JavaScript Code:

function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);





Live Demo:




function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);



 */