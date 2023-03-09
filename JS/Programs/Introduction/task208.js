// JavaScript: Find the number of inversions of a specified array of integers




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-102 with Solution
Write a JavaScript program to find the number of inversions of a given array of integers.

Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of inversions of a specified array of integers</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function number_of_InversionsNaive(arr) {
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              ctr++;
        }
    }
    return ctr;
}

console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
console.log(number_of_InversionsNaive([10, 30, 20, -10]));  




ES6 Version:

function number_of_InversionsNaive(arr) {
    let ctr = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              ctr++;
        }
    }
    return ctr;
}

console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
console.log(number_of_InversionsNaive([10, 30, 20, -10]));  




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of inversions of a specified array of integers</title>
</head>
<body>

</body>


js:




function number_of_InversionsNaive(arr) {
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              ctr++;
        }
    }
    return ctr;
}

console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
console.log(number_of_InversionsNaive([10, 30, 20, -10]));  



 */