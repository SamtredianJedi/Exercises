// JavaScript: Create a string using the middle three characters of a given string of odd length



/**
 * 
 * 
 * JavaScript Basic: Exercise-63 with Solution
Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be 3.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));



ES6 Version:

function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));

Live Demo:


function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));


 */