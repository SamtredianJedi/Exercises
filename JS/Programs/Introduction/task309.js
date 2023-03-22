// JavaScript: How to sort three numbers

/**
 * 
 * 
 * 
 * 
 * JavaScript Conditional Statement and loops: Exercise-3 with Solution
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

Sample numbers: 3, -7, 2
Output : The sign is -







Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript conditional statement to sort three numbers</title>
</head>
<body>
  
</body>
</html>








JavaScript Code:

var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}        




 */