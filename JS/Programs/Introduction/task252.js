// JavaScript: Sort the strings of a given array of strings in the order of increasing lengths

/**
 * 
 * 

JavaScript Basic: Exercise-143 with Solution
Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.

Note: Do not change the order if the lengths of two string are same.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sort the strings of a given array of strings in the order of increasing lengths.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function sort_by_string_length(arra) {
	for (var i = 0; i < arra.length; i++) {
		for (var j = i + 1; j < arra.length; j++) {
			if (arra[i].length > arra[j].length) {
				var m = arra[i];
				arra[i] = arra[j];
				arra[j] = m;
			}
		}
	}
	return arra;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));




ES6 Version:

function sort_by_string_length(arra) {
	for (let i = 0; i < arra.length; i++) {
		for (let j = i + 1; j < arra.length; j++) {
			if (arra[i].length > arra[j].length) {
				const m = arra[i];
				arra[i] = arra[j];
				arra[j] = m;
			}
		}
	}
	return arra;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: ",arra);
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sort the strings of a given array of strings in the order of increasing lengths</title>
</head>
<body>

</body>


js:




function sort_by_string_length(arra) {
	for (var i = 0; i < arra.length; i++) {
		for (var j = i + 1; j < arra.length; j++) {
			if (arra[i].length > arra[j].length) {
				var m = arra[i];
				arra[i] = arra[j];
				arra[j] = m;
			}
		}
	}
	return arra;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));



 */