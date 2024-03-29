// JavaScript: Filter false, null, 0 and blank values from an array



/**
 * 
 * 

JavaScript Array: Exercise-39 with Solution
Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to filter false, null, 0 and blank values from an array</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));







ES6 Version:

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));







Live Demo:


js:




function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}
​
function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}
​
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));



 */