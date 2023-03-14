// JavaScript: Number of occurrences of each letter in specified string





/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-17 with Solution
Write a JavaScript function to get the number of occurrences of each letter in specified string.






Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Number of occurrences of each letter in specified string</title>
</head>
<body>

JavaScript Code:

function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));



Live Demo:


<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Number of occurrences of each letter in specified string</title>
</head>
<body>




js:


function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));




 * 
 */