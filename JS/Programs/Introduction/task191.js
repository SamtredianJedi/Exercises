// JavaScript: Compute the sum of two parts and store into an array of size two

/**
 * 
 * 
 * JavaScript Basic: Exercise-85 with Solution
Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of two parts and store into an array of size two</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function alternate_Sums(arr) {
  var result = [0, 0];
  for(var i = 0; i < arr.length; i++) 
  {
    if(i % 2) result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))





ES6 Version:

function alternate_Sums(arr) {
  const result = [0, 0];
  for(let i = 0; i < arr.length; i++) 
  {
    if(i % 2) result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))




Live Demo:

html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of two parts and store into an array of size two</title>
</head>
<body>

</body>


js:




function alternate_Sums(arr) {
  var result = [0, 0];
  for(var i = 0; i < arr.length; i++) 
  {
    if(i % 2) result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))



 */