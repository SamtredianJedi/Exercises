/**
 * 
 * JavaScript eval() function
The eval() function in JavaScript is used to evaluate the expression. It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.

The parameter of the eval() function is a string. If the parameter represents the statements, eval() evaluates the statements. If the parameter is an expression, eval() evaluates the expression. If the parameter of eval() is not a string, the function returns the parameter unchanged.

There are some limitations of using the eval() function, such as the eval() function is not recommended to use because of the security reasons. It is not suggested to use because it is slower and makes code unreadable.

Syntax
eval(string)  
Values
It accepts a single parameter, which is defined as follows.

string: It represents a JavaScript expression, single statement, or the sequence of statements. It can be a variable, statement, or a JavaScript expression.

Let's understand the JavaScript eval() function by using illustrations.

Example1
It is a simple example of evaluating an expression using the eval() function. In this example, there are some variables. We are applying the eval() function on variables a, b, and c to calculate the sum, multiplication, and subtraction.

<html>  
<head>  
<script>  
var a = 10, b = 20, c = 30, sum, mul, sub;  
sum = eval(" a + b + c ");  
mul = eval(" a  * b * c");  
sub = eval(" a  - b");  
document.write(sum + "<br>");  
document.write(mul + "<br>");  
document.write(sub);  
</script>  
</head>  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example2
In this example, we are calling a function using the eval() function. Here there is a function fun() having two arguments and returns the multiplication of both parameters.

We are calling the function in the eval() function, and storing the result in the res variable.

<html>  
<head>  
<script>  
var res;  
  
function fun(a, b)  
{  
return a * b;  
}  
  
eval("res = fun(50, 50);");  
document.write(res);  
  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example3 - Evaluate the string with JavaScript statements
In this example, we are using the eval() function to evaluate the string with JavaScript statements. Here, there is string str, having JavaScript conditional if-else statement. We are matching the value of the variable 'x', if the value of x is 0, the output will be 'SUNDAY', else the output will be 'MONDAY'.

<html>  
<head>  
<script>  
var x = 0;  
var str = "if(x == 0) {'SUNDAY'} else 'MONDAY';";  
  
document.write('The output is : ', eval(str));  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example - convert string to JavaScript Objects
In this example, we are converting the string to JSON object. Here, the string str contains the data as opposed to the code. We have to switch the data to JSON that allows the string to use a subset of JavaScript syntax for representing the data.
 */

/**
 * 
 * Here, we are using the object obj to represent the data.

<html>  
<head>  
<script>  
var str = '({"fname" : "Harry", "lname" : "Rickman"})';  
  
var obj = eval(str);  
  
document.write(obj.fname + " " + obj.lname);  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */