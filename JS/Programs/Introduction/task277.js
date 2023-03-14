// JavaScript: Compute the value of bn where n is the exponent and b is the bases



/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-15 with Solution
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Compute the value of bn where n is the exponent and b is the bases</title>
</head>
<body>
<body onload="updateClock(); setInterval('updateClock()', 1000)">  
</body>
</html>

JavaScript Code:

function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));




Live Demo:




function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));



 */