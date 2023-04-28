// JavaScript: Add digits until there is only one digit

/**
 * 
 * 
 * JavaScript Math: Exercise-99 with Solution
Write a JavaScript program to add repeatedly all the digits of a given non-negative number until the result has only one digit.

For example:
Input: 39
Output: 3
Explanation: The formula is like: 3 + 9 = 12, 1 + 2 = 3.





Sample Solution-1:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Add digits until there is only one digit</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n) {
  if (isNaN(n) || n === 0) return 0;  
  total = n;
    while (n >= 10) {        
        total = 0;
        while (n != 0) {
            total += Math.floor(n % 10);
            n = Math.floor(n / 10);
        }
        n = total;
    }
    
    return total;
};  
n = 49
console.log("n = " +n)
console.log("Add digits of the said number until there is only one digit: "+test(n));
n = 9
console.log("Original text: " +n)
console.log("Add digits of the said number until there is only one digit: "+test(n));


 */