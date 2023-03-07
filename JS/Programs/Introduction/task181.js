// JavaScript: Create a new array taking the middle elements of the two arrays of integer and each length 3

/**
 * 
 * 
 * JavaScript Basic: Exercise-75 with Solution
Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function middle_elements(a, b) 
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 




ES6 Version:

function middle_elements(a, b) 
{
  const new_array = [];
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5]));




Live Demo:


function middle_elements(a, b) 
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 



 */