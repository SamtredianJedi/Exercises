// JavaScript: Create a new string adding "Py" in front of a given string

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-21 with Solution
Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


Sample Solution:

HTML Code:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a new string adding “Py” in front of a given string.  If the given string begins with “Py” then return the original string.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));



ES6 Version:

function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return `Py${str1}`;
}

console.log(string_check("Python"));
console.log(string_check("thon"));


Live Demo:

function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));



 */