// JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers




/**
 * 
 * 
 * 
 * 
 JavaScript Conditional Statement and loops: Exercise-5 with Solution
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"



Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>For loop that will iterate from 0 to 15</title>
</head>
<body>
  
</body>
</html>




JavaScript Code:

for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}




Live Demo:


html:



<head>
<meta charset=utf-8 />
<title>For loop that will iterate from 0 to 15</title>
</head>
<body>
  
</body>


js:




for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}



 */