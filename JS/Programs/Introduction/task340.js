// JavaScript: Convert Roman Numeral to Integer

/**
 * 
 * 
 * JavaScript Math: Exercise-22 with Solution
Write a JavaScript function that Convert Roman Numeral to Integer.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that Convert Roman Numeral to Integer</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function roman_to_Int(str1) {
if(str1 == null) return -1;
var num = char_to_int(str1.charAt(0));
var pre, curr;

for(var i = 1; i < str1.length; i++){
curr = char_to_int(str1.charAt(i));
pre = char_to_int(str1.charAt(i-1));
if(curr <= pre){
num += curr;
} else {
num = num - pre*2 + curr;
}
}

return num;
}

function char_to_int(c){
switch (c){
case 'I': return 1;
case 'V': return 5;
case 'X': return 10;
case 'L': return 50;
case 'C': return 100;
case 'D': return 500;
case 'M': return 1000;
default: return -1;
}
}
console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));




Live Demo:


html:





<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that Convert Roman Numeral to Integer</title>
</head>
<body>

</body>



js:




function roman_to_Int(str1) {
if(str1 == null) return -1;
var num = char_to_int(str1.charAt(0));
var pre, curr;

for(var i = 1; i < str1.length; i++){
curr = char_to_int(str1.charAt(i));
pre = char_to_int(str1.charAt(i-1));
if(curr <= pre){
num += curr;
} else {
num = num - pre*2 + curr;
}
}

return num;
}

function char_to_int(c){
switch (c){
case 'I': return 1;
case 'V': return 5;
case 'X': return 10;
case 'L': return 50;
case 'C': return 100;
case 'D': return 500;
case 'M': return 1000;
default: return -1;
}
}
console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));






 */