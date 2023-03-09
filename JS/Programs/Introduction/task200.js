// JavaScript: Find the number which appears most in a given array of integers

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-94 with Solution
Write a JavaScript program to find the number which appears most in a given array of integers.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the number which appears most in a given array of integers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function array_element_mode(arr) {
  var ctr = [],
    ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;  
}
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))




ES6 Version:

function array_element_mode(arr) {
  const ctr = [];
  let ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;
}
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))




Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the number which appears most in a given array of integers</title>
</head>
<body>

</body>

js:




function array_element_mode(arr) {
  var ctr = [],
    ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;  
}
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))







 */