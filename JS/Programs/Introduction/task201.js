// JavaScript: Replace all the numbers with a specified number of a given array of integers


/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-95 with Solution
Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Replace all the numbers with a specified number of a given array of integers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));





ES6 Version:

function array_element_replace(arr, old_value, new_value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log(`Original Array: ${num}`);
console.log(array_element_replace(num, 2, 5));



Live Demo:




html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Replace all the numbers with a specified number of a given array of integers</title>
</head>
<body>

</body>


js:




function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));


 */