// JavaScript: Find the kth greatest element of a given array of integers



/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-90 with Solution
Write a JavaScript program to find the kth greatest element of a given array of integers.






Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the kth greatest element of a given array of integers.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))




ES6 Version:

function Kth_greatest_in_array(arr, k) {

  for (let i = 0; i < k; i++) {
    let max_index = i;
    const tmp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))


Live Demo:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the kth greatest element of a given array of integers</title>
</head>
<body>

</body>



js:




function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))


 */