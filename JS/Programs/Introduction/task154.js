// JavaScript: Reverse a given string

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-48 with Solution
Write a JavaScript program to reverse a given string.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to reverse a given string.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));




ES6 Version:

function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));


Live Demo:


function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));


 */