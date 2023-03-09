// JavaScript: Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-97 with Solution
Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function build_Palindrome(new_str) {
  var flag;
  for (var i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))





ES6 Version:

function build_Palindrome(new_str) {
  let flag;
  for (let i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))


Live Demo:


html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it</title>
</head>
<body>

</body>

js:





function build_Palindrome(new_str) {
  var flag;
  for (var i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))



 */