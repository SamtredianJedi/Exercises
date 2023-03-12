// JavaScript: Find the number of elements which presents in both of the given arrays

/**
 * 
 * 
 * JavaScript Basic: Exercise-141 with Solution
Write a JavaScript program to find the number of elements which presents in both of the given arrays.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the number of elements which presents in both of the given arrays.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function test_same_elements_both_arrays(arra1, arra2) {
  var result = 0;
  for(var i = 0; i < arra1.length; i++) {
    for(var j = 0; j < arra2.length; j++){
      if(arra1[i] === arra2[j])
      {
        result++;
      }
    }
  }
  return result;
}
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));



ES6 Version:

function test_same_elements_both_arrays(arra1, arra2) {
  let result = 0;
  for(let i = 0; i < arra1.length; i++) {
    for(let j = 0; j < arra2.length; j++){
      if(arra1[i] === arra2[j])
      {
        result++;
      }
    }
  }
  return result;
}
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find the number of elements which presents in both of the given arrays.</title>
</head>
<body>

</body>


js:



function test_same_elements_both_arrays(arra1, arra2) {
  let result = 0;
  for(let i = 0; i < arra1.length; i++) {
    for(let j = 0; j < arra2.length; j++){
      if(arra1[i] === arra2[j])
      {
        result++;
      }
    }
  }
  return result;
}
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));



 */