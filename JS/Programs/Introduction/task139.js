// JavaScript: Find the larger number from the two given positive integers



/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-34 with Solution
Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.



Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to find the larger number from the two given positive integers, the two numbers  are in the range 40..60 inclusive.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function max_townums_range(x, y){	
if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
if(x === y){
return "Numbers are the same";
}else if (x > y){
return x;
}else{
return y;
}
}else{
return "Numbers don't fit in range";
}
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));




ES6 Version:

function max_townums_range(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));



Live Demo:

HTML:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to find the larger number from the two given positive integers, the two numbers  are in the range 40..60 inclusive.</title>
</head>
<body>
​
</body>


Javascript:



function max_townums_range(x, y){	
if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
if(x === y){
return "Numbers are the same";
}else if (x > y){
return x;
}else{
return y;
}
}else{
return "Numbers don't fit in range";
}
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));





 */