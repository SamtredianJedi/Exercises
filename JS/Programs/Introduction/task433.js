// JavaScript: Find the sum of squares of a numeric vector

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-11 with Solution
Write a JavaScript program to find the sum of squares of a numerical vector.





HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Sum of squares of a numeric vector</title>
</head>
<body>
</body>
</html>








JavaScript Code:

function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(sum_sq([0,1,2,3,4])); 





ES6 Version:

function sum_sq(array) {
  var sum = 0,
      i = array.length;
  while (i--) {
    sum += Math.pow(array[i], 2);
  }return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));





 */