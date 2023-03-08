// JavaScript: Check whether two arrays of integers of same length are similar or not

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-87 with Solution
Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function array_checking(arra1, arra2) {

  for(var i = 0; i < arra1.length; i++) {
    for(var j = i; j < arra1.length; j++) {
      var result = true,
        temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for(var k = 0; k < arra1.length; k++) {
        if(arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if(result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}

console.log(array_checking([10,20,30], [10,20,30]))
console.log(array_checking([10,20,30], [30,10,20]))
console.log(array_checking([10,20,30,40], [10,30,20,40]))




ES6 Version:

function array_checking(arra1, arra2) {

  for(let i = 0; i < arra1.length; i++) {
    for(let j = i; j < arra1.length; j++) {
      let result = true;
      const temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for(let k = 0; k < arra1.length; k++) {
        if(arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if(result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}

console.log(array_checking([10,20,30], [10,20,30]))
console.log(array_checking([10,20,30], [30,10,20]))
console.log(array_checking([10,20,30,40], [10,30,20,40]))


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Check whether two arrays of integers and same length are similar or not</title>
</head>
<body>

</body>

js:



function array_checking(arra1, arra2) {

  for(var i = 0; i < arra1.length; i++) {
    for(var j = i; j < arra1.length; j++) {
      var result = true,
        temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for(var k = 0; k < arra1.length; k++) {
        if(arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if(result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}

console.log(array_checking([10,20,30], [10,20,30]))
console.log(array_checking([10,20,30], [30,10,20]))
console.log(array_checking([10,20,30,40], [10,30,20,40]))





 */