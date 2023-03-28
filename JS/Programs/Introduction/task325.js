// JavaScript: Find the lowest value in an array

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-7 with Solution
Write a JavaScript function to find the lowest value in an array.

Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56



HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<title>Javascript random function</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function min(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.min.apply(null, input);
	}

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));



Live Demo:

html:



<head>
  <meta charset="utf-8">
<title>Javascript random function</title>
</head>
<body>

</body>



js:



function min(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.min.apply(null, input);
  }
​
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));




 */