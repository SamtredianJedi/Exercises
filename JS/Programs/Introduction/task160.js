// JavaScript: Count the number of vowels in a given string

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-54 with Solution
Write a JavaScript program to count the number of vowels in a given string.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to count the number of vowels in a given string.</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));


Live Demo:


ES6 Version:

function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));


Live Demo:


function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));


 */