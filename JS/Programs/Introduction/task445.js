// JavaScript: Find the difference of two arrays

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-23 with Solution
Write a JavaScript function to find the difference between two arrays.

Test Data:
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]





HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS, difference between two arrays</title>
</head>
<body>
</body>
</html>







JavaScript Code:

function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));




ES6 Version:

function differenceOf2Arrays (array1, array2) {
const temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(!array2.includes(array1[i])) temp.push(array1[i]);
}
for(i in array2) {
if(!array1.includes(array2[i])) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));






 */