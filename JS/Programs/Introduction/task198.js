// JavaScript: Find the maximum difference between any two adjacent elements of a given array of integers



/**
 * 
 * 
 * 
 JavaScript Basic: Exercise-92 with Solution
Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.




Sample Solution:

HTML Code:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximum difference between any two adjacent elements of a given array of integers.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))






ES6 Version:

function max_difference(arr) {
	let max = -1;
    let temp;
	for (let i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))


Live Demo:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the maximal difference between any two adjacent elements of a given array of integers</title>
</head>
<body>

</body>


js:




function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))





 */