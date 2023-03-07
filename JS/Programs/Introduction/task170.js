// JavaScript: Concatenate two strings and return the result

/**
 * 

JavaScript Basic: Exercise-64 with Solution
Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

For example "Python" and "JS" will be "onJS".




Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));





ES6 Version:

function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));


Live Demo:



function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));


 */