// JavaScript: Compute the sum of an array of integers




/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-4 with Solution
Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21




Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Compute the sum of an array of integers</title>
</head>
<body>

</body>
</html>



JavaScript Code:

var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1,2,3,4,5,6]));




Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>Compute the sum of an array of integers</title>
</head>
<body>

</body>



js:




var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1,2,3,4,5,6]));


 */