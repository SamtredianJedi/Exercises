// JavaScript: Get the function name



/**
 * 
 * 
 * 
 * JavaScript: Get the function name
 * 
 * 
 * 
 * Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get the function name.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function abc() {
    console.log( arguments.callee.name );
}

abc();




Live Demo:




function abc() {
    console.log( arguments.callee.name );
}
abc();


 * 
 * 
 */