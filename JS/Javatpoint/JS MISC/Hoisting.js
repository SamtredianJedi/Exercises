/**
 * 
 * JavaScript Hoisting
Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. So, in JavaScript we can use variables and functions before declaring them.

JavaScript hoisting is applicable only for declaration not initialization. It is required to initialize the variables and functions before using their values.

JavaScript Hoisting Example
Here, we will use the variable and function before declaring them.

JavaScript Variable Hoisting
Let's see the simple example of variable hoisting.

<script>  
x=10;  
document.write(x);  
var x;  
</script>  
JavaScript Function Hoisting
Let's see the simple example of variable hoisting.

<script>  
document.write(sum(10,20));  
function sum(a,b)  
{  
return a+b;  
}  
</script>  
 */