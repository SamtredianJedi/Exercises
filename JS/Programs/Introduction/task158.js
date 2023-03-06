// JavaScript: Convert the letters of a given string in alphabetical order

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-52 with Solution
Write a JavaScript program to convert the letters of a given string in alphabetical order.




Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to convert the letters of a given string  in alphabetical order.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function alphabet_Soup(str) { 

    return str.split("").sort().join("");
         
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));



ES6 Version:

function alphabet_Soup(str) { 

    return str.split("").sort().join("");
         
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));
Live Demo:



function alphabet_Soup(str) { 

    return str.split("").sort().join("");
         
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));


 */