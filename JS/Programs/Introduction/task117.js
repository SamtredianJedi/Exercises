// JavaScript: Get the extension of a filename




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-14 with Solution
Write a JavaScript exercise to get the extension of a filename.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>The extension of a filename.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());

Sample Output:

php
js
ES6 Version:

filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());
Live Demo:



filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());


 */