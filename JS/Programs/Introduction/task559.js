// JavaScript: Create a specified number of elements and pre-filled string value arrayJavaScript: Create a specified number of elements and pre-filled string value array

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-37 with Solution
Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

Test Data:
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create a specified number of elements and pre-filled string value array</title>
</head>
<body>

</body>
</html>







JavaScript Code :

function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));



 */