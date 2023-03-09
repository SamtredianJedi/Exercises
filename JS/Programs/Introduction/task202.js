// JavaScript: Compute the sum of absolute differences of consecutive numbers of a given array of integers



/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-96 with Solution
Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.





Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Compute the sum of absolute differences of consecutive numbers of a given array of integers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function sum_adjacent_difference(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));






ES6 Version:

function sum_adjacent_difference(arr) {
	let result = 0;
	for (let i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));


Live Demo:



html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of absolute differences of consecutive numbers of a given array of integers</title>
</head>
<body>


js:




function sum_adjacent_difference(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));



</body>


 */