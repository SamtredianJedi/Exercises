// JavaScript: Check whether there is at least one element which occurs in two given sorted arrays of integers



/**
 * 
 * 
 * JavaScript Basic: Exercise-100 with Solution
Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether there is at least one element which occurs in two given sorted arrays of integers</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++)
  {
    if (arra2.indexOf(arra1[i]) != -1) 
      return true;
  }
  return false;
}
console.log(check_common_element([1,2,3], [3,4,5]));   
console.log(check_common_element([1,2,3], [5,6,7]));   





ES6 Version:

function check_common_element(arra1, arra2) {
  for (let i = 0; i < arra1.length; i++)
  {
    if (arra2.includes(arra1[i])) 
      return true;
  }
  return false;
}
console.log(check_common_element([1,2,3], [3,4,5]));   
console.log(check_common_element([1,2,3], [5,6,7]));



Live Demo:


html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if there is at least one element which occurs in two given sorted arrays of integers</title>
</head>
<body>

</body>


js:




function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++)
  {
    if (arra2.indexOf(arra1[i]) != -1) 
      return true;
  }
  return false;
}
console.log(check_common_element([1,2,3], [3,4,5]));   
console.log(check_common_element([1,2,3], [5,6,7]));   



 */