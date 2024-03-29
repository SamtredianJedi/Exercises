// JavaScript: Swap two variables



/**
 * 


JavaScript Math: Exercise-55 with Solution
Write a JavaScript program to swap two given variables.

Swapping two variables refers to mutually exchanging the values of the variables. Generally, this is done with the data in memory.

The simplest method to swap two variables is to use a third temporary variable :
define swap(x, y)
temp := x
x := y
y := temp




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Swap two variables</title>
</head>
<body>

</body>
</html>






JavaScript Code:

let x = 20;
let y = 40;
console.log("x=",x,"y=",y)
let temp;
temp = x;
x = y;
y = temp;
console.log("After swapping:")
console.log("x=",x,"y=",y)





Live Demo:


html:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Swap two variables</title>
</head>
<body>

</body>
</html>




js:


let x = 20;
let y = 40;
console.log("x=",x,"y=",y)
let temp;
temp = x;
x = y;
y = temp;
console.log("After swapping:")
console.log("x=",x,"y=",y)









 */