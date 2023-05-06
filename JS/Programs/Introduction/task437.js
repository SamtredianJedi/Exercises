// JavaScript: Display the colors entered in an array by a specific format

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-15 with Solution
Write a JavaScript program to display the colors in the following way.

Here is the sample array:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -







HTML Code :

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Display colors using ordinal numbers</title>
</head>
<body> 
</body>
</html>









JavaScript Code:

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}








ES6 Version:

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
  const o = ["th","st","nd","rd"];
  const x = n%100;
  return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 const ordinal = n + 1;

 const output = (`${Ordinal(ordinal)} choice is ${color[n]}.`);

console.log(output);
}



 */