/**
 * 
 * JavaScript ternary operator
During coding in any language, we use various ways to handle conditional situations. The common one is the use of if statement; instead of using the if statement, we can use the ternary operator in JavaScript. The ternary operator assigns a value to the variable based on a condition provided to it.

It is the only operator in JavaScript that takes three operands. The working of this operator is the same as the if-else conditional statement. We can say that it is the shortcut of the if-else.

This operator includes three operands: a condition followed by a question mark (?) sign, and two expressions separated by the colon (:). The first expression is executed when the condition is true, and the second expression is executed when the condition is false.

Syntax
var a = (condition) ? expr1 : expr2;  
In the above syntax, condition, expr1, and expr2 are the three operands used in the ternary operator. The value is assigned to the variable 'a' based on the provided condition. The condition is evaluated as a Boolean value; based on its result, the operator assigns the result to the variable. It assigns the first expression on the true value of the condition and assigns the second expression on the false value of the condition.

Let's see an example of using the ternary operator in JavaScript.

Example
This is a simple example of checking whether the number is odd or even using the ternary operator. The result will display using the alert() dialog box.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
let a = 358;  
let val = ( a % 2 == 0) ? 'Even Number' : 'Odd Number';  
alert(val);  
</script>  
  
</head>  
<body>  
<h1> Welcome to the javaTpoint.com </h1>  
<h3> This is an example of ternary operator.  </h3>  
</body>  
</html>  
 */