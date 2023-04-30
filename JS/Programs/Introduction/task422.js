// JavaScript: Distinct ways to climb the staircase

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-104 with Solution
A staircase consists of N steps, and you are given the choice of climbing one step at a time or two steps at a time.
Write a JavaScript program to find distinct ways to climb the staircase.

Example:
Number of stairs = 2
There are 2 ways to climb the stairs: (1,1) and (2)
Number of stairs = 3
There are 3 ways to climb the stairs: (1,1,1), (2,1) and (1,2)





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Distinct ways to climb the staircase</title>
</head>
<body>

</body>
</html>







Solution-1

JavaScript Code:

function test(n) {
    var x = 0,
        y = 1;
    while(n-->0){
        y = x + y;
        x = y - x;
    }
    return b;
 }

n = 2
console.log("Number of stairs = " +n)
console.log("Number of ways to climb the said number of stairs: "+test(n));
n = 3
console.log("Number of stairs = " +n)
console.log("Number of ways to climb the said number of stairs: "+test(n));







Live Demo:


html:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Distinct ways to climb the staircase</title>
</head>
<body>

</body>
</html>


js:



JavaScript Code:

function test(n) {
    var x = 0,
        y = 1;
    while(n-->0){
        y = x + y;
        x = y - x;
    }
    return b;
 }

n = 2
console.log("Number of stairs = " +n)
console.log("Number of ways to climb the said number of stairs: "+test(n));
n = 3
console.log("Number of stairs = " +n)
console.log("Number of ways to climb the said number of stairs: "+test(n));







 */