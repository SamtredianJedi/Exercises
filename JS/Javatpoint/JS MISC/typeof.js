/**
 * 
 * JavaScript typeof operator
The JavaScript typeof operator is used to return a string that represents the type of JavaScript for a given value. It returns the data type of the operand in the form of a string. The operand can be a literal or a data structure like a function, an object, or a variable.

Syntax
There are following two ways of using the typeof operator.

typeof operand  
or  
typeof (operand)  
Values
operand: It is an expression that represents the object or primitive whose type is to be returned.

The possible return values of the typeof operator are tabulated as follows:

Type of the operand	Result
object	"object"
number	"number"
string	"string"
boolean	"boolean"
function	"function"
undefined	"undefined"
Let's understand this operator by using some examples.

Example1
In this example, the operands are of number type. The typeof operator will print the "number" as the type of the operand, whether the operand is a negative interger, floating-point number, infinity, NaN, zero, or any integer.

<html>  
<head>  
<script>  
document.write(typeof (45) + "<br>");  // results: "number"  
document.write(typeof (-90) + "<br>");  // results: "number"  
document.write(typeof (0) + "<br>");  // results: "number"  
document.write(typeof (22.6) + "<br>");  // results: "number"  
document.write(typeof (Infinity) + "<br>");  // results: "number"  
document.write(typeof (NaN));  // results: "number". Although NaN is "Not-A-Number"  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */


/**
 * 
 * Example2
In this example, the operands are of string type. The typeof operator will print the "string" as the type of the operand, whether the operand is an empty string, collection of characters, number written in quotes.

<html>  
<head>  
<script>  
document.write(typeof ("") + "<br>");  // results: "string"  
document.write(typeof ("javaTpoint.com") + "<br>");  // results: "string"  
document.write(typeof ("20") + "<br>");  // results: "string"  
document.write(typeof (typeof 1) + "<br>");  // results: "string"  
document.write(typeof String(12));  // wrapping in String function will results: "string"  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example3
In this example, the operands are of Boolean type. The typeof operator will print the "boolean", as the type of the operand, if the operand is true, or false.

<html>  
<head>  
<script>  
document.write(typeof (true) + "<br>");  // results: "boolean"  
document.write(typeof (false) + "<br>");  // results: "boolean"  
document.write(typeof Boolean(20) + "<br>");   // wrapping in Boolean function will results: "boolean"  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example4
In this example, the operands are of undefined type. The typeof operator will print the "undefined" as the type of the operand. Here, the type of Null is undefined, it is because it is written as Null instead of null. If we write it as null, the type of it will be object.

<html>  
<head>  
<script>  
document.write(typeof Null + "<br>");  // results: "undefined"  
document.write(typeof undefined + "<br>");  // results: "undefined"  
document.write(typeof a + "<br>");   // results: "undefined"  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */

/**
 * 
 * Example5
In this example, the operands are of Object and Function type. The typeof operator will print the "object" and "function", according to the type of the operand.

<html>  
<head>  
<script>  
document.write(typeof null + "<br>");  // results: "object"  
document.write(typeof [1, 2, 'hello'] + "<br>");  // results: "object"  
document.write(typeof {a: 'hello'} + "<br>");   // results: "object"  
document.write(typeof [1, 2, 3, 4] + "<br>");   // results: "object"  
document.write(typeof function(){} + "<br>");   // results: "function"  
document.write(typeof class hello{} + "<br>");   // results: "function"  
</script>  
</head>  
  
<body>  
</body>  
</html>  
 */