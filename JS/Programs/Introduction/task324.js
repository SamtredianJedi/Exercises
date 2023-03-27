// JavaScript: Find the highest value in an array

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-6 with Solution
Write a JavaScript function to find the highest value in an array.

Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Find the highest value in an array</title>
</head>
<body>

</body>
</html>


JavaScript Code:

function max(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.max.apply(null, input);
	}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));






 */