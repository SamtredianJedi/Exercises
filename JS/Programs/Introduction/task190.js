// JavaScript: Replace each character of a given string by the next one in the English alphabet




/**
 * 
 * JavaScript Basic: Exercise-84 with Solution
Write a JavaScript to replace each character of a given string by the next one in the English alphabet.

Note: ‘a’ will be replace by ‘b’ or ‘z’ would be replaced by ‘a’.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Write a JavaScript to replace each character of a given string by the next one in the English alphabet</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for(var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"))




ES6 Version:

function alphabet_char_Shift(str) {
  const all_chars = str.split("");
  for(let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"))


Live Demo:


html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Write a JavaScript to replace each character of a given string by the next one in the English alphabet</title>
</head>
<body>

</body>


js:




function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for(var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"))



 */