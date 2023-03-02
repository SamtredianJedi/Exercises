// JavaScript: Display a message when a number is between a range

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-8 with Solution
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Guess a number</title>
</head>
<body>
</body>
</html>

JavaScript Code:

// Get a random integer from 1 to 10 inclusive
 const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);
   

Sample Output:

Matched
Explanation:

The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.

The Math.random() function is used to get a floating-point, pseudo-random number in the range [0, 1] that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.




ES6 Version:

// Get a random integer from 1 to 10 inclusive
var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num) console.log('Matched');else console.log('Not matched, the number was ' + gnum);
Live Demo:



html:

 <head>
<meta charset=utf-8 />
<title>Guess a number</title>
</head>
<body>
</body>


js:



// Get a random integer from 1 to 10 inclusive
 const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);


   
 */