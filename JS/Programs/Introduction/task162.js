// JavaScript: Divide two positive numbers and return a string with properly formatted commas



/**
 * 
 * JavaScript Basic: Exercise-56 with Solution
Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to divide two positive numbers and return a string with properly formatted commas.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function division_string(n1, n2) {
  
n1 = 80;
n2 = 6;

var div = Math.round(n1 / n2).toString(),
result_array = div.split("");

if (div >= 1000)
{
for (var i = div.length - 3; i > 0; i -= 3) 
{
result_array.splice(i, 0, ",");
}
result_array;
}
console.log(result_array);



Live Demo:


n1 = 80;
n2 = 6;
  
var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000)
       {
        for (var i = div.length - 3; i > 0; i -= 3) 
        {
            result_array.splice(i, 0, ",");
        }
          result_array;
    }
console.log(result_array);


 */