// JavaScript: Convert a decimal number to binary, hexadecimal or octal number

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-3 with Solution
Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

Test Data:
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170"




Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Convert a decimal number to binary, hexadecimal or octal number</title>
</head>
<body>

</body>
</html>





JavaScript Code:

dec_to_bho  = function(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}

console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));




Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>Convert a decimal number to binary, hexadecimal or octal number</title>
</head>
<body>

</body>




js:




dec_to_bho  = function(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}
​
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));



 */