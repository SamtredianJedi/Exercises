// JavaScript: Test whether a string end with "Script"

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-65 with Solution
Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to test whether a string end with “Script”.  The string length must be greater or equal to 6.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));



ES6 Version:

function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));


Live Demo:



function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));


 */