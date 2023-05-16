// JavaScript: Generate an array of specified length, the content of the array is integer numbers, increase by one from starting

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-40 with Solution
Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]



HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to generate an array of given length, the content of the array is integer numbers, increase by one from starting</title>
</head>
<body>

</body>
</html>








JavaScript Code:

function array_range(start, len) 
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));



 */