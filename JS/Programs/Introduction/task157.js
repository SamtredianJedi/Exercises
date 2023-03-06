// JavaScript: Convert a given number to hours and minutes



/**
 * 
 * 
 * JavaScript Basic: Exercise-51 with Solution
Write a JavaScript program to convert a given number to hours and minutes.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to convert a given number to hours and minutes.</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));



ES6 Version:

function time_convert(num)
 { 
  const hours = Math.floor(num / 60);  
  const minutes = num % 60;
  return `${hours}:${minutes}`;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));


Live Demo:


function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));



 */