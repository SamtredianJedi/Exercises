// JavaScript: Find out if a number is a natural number or not

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-12 with Solution
Write a JavaScript function to find out if a number is a natural number or not.

Note:
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions.
Test Data:
console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10/0));
Output:
false
true
false
false





HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Checking for Natural Number</title>
  </head>
  <body>
</body>
  </html>
  




  JavaScript Code:

function is_Natural(n) 
      {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log(is_Natural(-15));
console.log(is_Natural(1));console.log(is_Natural(10.22));
console.log(is_Natural(10/0));




Live Demo:


html:




<head>
  <meta charset="utf-8">
  <title>Checking for Natural Number</title>
  </head>
  <body>
</body>



js:




function is_Natural(n) 
      {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log(is_Natural(-15));
console.log(is_Natural(1));console.log(is_Natural(10.22));
console.log(is_Natural(10/0));





 */