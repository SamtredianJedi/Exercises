// JavaScript: Format a number up to specified decimal places

/**
 * 
 * 

JavaScript Math: Exercise-5 with Solution
Write a JavaScript function to format a number up to specified decimal places.

Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00"





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
 <title>JS Bin</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function decimals(n, d) {
 if ((typeof n !== 'number') || (typeof d !== 'number'))
   return false;
    	n = parseFloat(n) || 0;
	return n.toFixed(d);
	}
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));








 */