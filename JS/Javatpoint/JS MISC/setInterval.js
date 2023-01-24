/**
 * 
 * 
 * 
 * JavaScript setInterval() method
The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval. It evaluates an expression or calls a function at given intervals. This method continues the calling of function until the window is closed or the clearInterval() method is called. This method returns a numeric value or a non-zero number that identifies the created timer.

Unlike the setTimeout() method, the setInterval() method invokes the function multiple times. This method can be written with or without the window prefix.

The commonly used syntax of setInterval() method is given below:

Syntax
window.setInterval(function, milliseconds);  
Parameter values
This method takes two parameter values function and milliseconds that are defined as follows.

function: It is the function containing the block of code that will be executed.

milliseconds: This parameter represents the length of the time interval between each execution. The interval is in milliseconds. It defines how often the code will be executed. If its value is less than 10, the value 10 is used.

How to stop the execution?
We can use the clearInterval() method to stop the execution of the function specified in setInterval() method. The value returned by the setInterval() method can be used as the argument of clearInterval() method to cancel the timeout.

Let's understand the use of setInterval() method by using some illustrations.

Example1
This is a simple example of using the setInterval() method. Here, an alert dialog box displays at an interval of 3 seconds. We are not using any method to stop the execution of the function specified in setInterval() method. So the method continues the execution of the function until the window is closed.

<html>  
<head>  
<title> setInterval() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setInterval() method </h3>  
<p> Here, an alert dialog box displays on every three seconds. </p>  
  
<script>  
  
var a;  
  
a = setInterval(fun, 3000);  
  
function fun() {  
alert(" Welcome to the javaTpoint.com ");  
}</script>  
  
</body>  
  
</html>  
 */

/**
 * 
 * Now, there is another example of using the setInterval() method.

Example2
Here, the background color will change on every 200 milliseconds. We are not using any method to stop the execution of the function specified in setInterval() method. So the method continues the execution of the function until the window is closed.

<html>  
<head>  
<title> setInterval() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setInterval() method </h3>  
<p> Here, the background color changes on every 200 milliseconds. </p>  
  
<script>  
var var1 = setInterval(color, 200);  
  
function color() {  
var var2 = document.body;  
var2var2.style.backgroundColor = var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}  
  
</script>  
  
</body>  
  
</html>  
 */

/**
 * 
 * Example3
In the above example, we have not used any method to stop the toggling between the colors. Here, we are using the clearInterval() method to stop the toggling of colors in the previous example.

We have to click the specified stop button to see the effect.

<html>  
<head>  
<title> setInterval() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setInterval() method </h3>  
<p> Here, the background color changes on every 200 milliseconds. </p>  
<button onclick = "stop()"> Stop </button>  
  
<script>  
var var1 = setInterval(color, 200);  
  
function color() {  
var var2 = document.body;  
var2var2.style.backgroundColor = var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}  
function stop() {  
clearInterval(var1);  
}  
  
</script>  
  
</body>  
  
</html>  
 */