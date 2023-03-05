// JavaScript: Create new string with first 3 characters are in lower case

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-37 with Solution
Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function upper_lower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));




ES6 Version:

function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));


Live Demo:


HTML:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.</title>
</head>
<body>
​
</body>


JS:



function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));


 */