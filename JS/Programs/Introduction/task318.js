// JavaScript: Sum the multiples of 3 and 5 under 1000

/**
 * 
 * 
 * 
 JavaScript Conditional Statement and loops: Exercise-12 with Solution
Write a JavaScript program to sum the multiples of 3 and 5 under 1000.





Sample Solution

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sum the multiples of 3 and 5 under 1000</title>
</head>
<body>
</body>
</html>





JavaScript Code:

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



 */