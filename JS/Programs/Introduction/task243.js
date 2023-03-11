// JavaScript: Remove all characters from a given string that appear more than once

/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-135 with Solution
Write a JavaScript program to remove all characters from a given string that appear more than once.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Remove all characters from a given string that appear more than once</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function remove_duplicate_cchars(str) {
  var arr_char = str.split("");
  var result_arr = [];

  for (var i = 0; i < arr_char.length; i++) {
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      result_arr.push(arr_char[i]);
    }

  return result_arr.join("");
}
console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));





ES6 Version:

function remove_duplicate_cchars(str) {
  const arr_char = str.split("");
  const result_arr = [];

  for (let i = 0; i < arr_char.length; i++) {
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      result_arr.push(arr_char[i]);
    }

  return result_arr.join("");
}
console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));



Live Demo:

html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Remove all characters from a given string that appear more than once</title>
</head>
<body>

</body>


js:



function remove_duplicate_cchars(str) {
  var arr_char = str.split("");
  var result_arr = [];

  for (var i = 0; i < arr_char.length; i++) {
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      result_arr.push(arr_char[i]);
    }

  return result_arr.join("");
}
console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));


 */