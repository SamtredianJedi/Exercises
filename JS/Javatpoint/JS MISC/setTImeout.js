/**
 * 
 * JavaScript setTimeout() method
The setTimeout() method in JavaScript is used to execute a function after waiting for the specified time interval. This method returns a numeric value that represents the ID value of the timer.

Unlike the setInterval() method, the setTimeout() method executes the function only once. This method can be written with or without the window prefix.

We can use the clearTimeout() method to stop the timeout or to prevent the execution of the function specified in the setTimeout() method. The value returned by the setTimeout() method can be used as the argument of the clearTimeout() method to cancel the timer.

The commonly used syntax of the setTimeout() method is given below.

Syntax
window.setTimeout(function, milliseconds);  
Parameter values
This method takes two parameter values function and milliseconds that are defined as follows.

function: It is the function containing the block of code that will be executed.

milliseconds: This parameter represents the time-interval after which the execution of the function takes place. The interval is in milliseconds. Its default value is 0. It defines how often the code will be executed. If it is not specified, the value 0 is used.

Let's understand the use of setTimeout() method by using some illustrations.

Example1
This is a simple example of using the setTimeout() method. Here, an alert dialog box will display at an interval of two seconds. We are not using any method to prevent the execution of the function specified in setTimeout() method. So the setTimeout() method executes the specified function only once, after the given time interval.

<html>  
<head>  
<title> setTimeout() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setTimeout() method </h3>  
<p> Here, an alert dialog box will display after two seconds. </p>  
  
<script>  
  
var a;  
  
a = setTimeout(fun, 2000);  
  
function fun() {  
alert(" Welcome to the javaTpoint.com ");  
}  
</script>  
  
</body>  
  
</html>  
 */

/**
 * 
 * Example2
It is another example of using the setTimeout() method. Here, a new tab opens after a time interval of two seconds and gets close after two seconds of opening. We are using the window.open() method to open a new tab and window.close() method to close the opened tab.

Because we are not using any method to prevent the execution of the function specified in setTimeout() method. So the function gets execute only once, after the given time interval.

<html>  
<head>  
<title> setTimeout() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setTimeout() method </h3>  
<p> Here, a new tab will open after 2 seconds and close after 2 seconds. </p>  
  
<script>  
var a = setTimeout(fun1, 2000);  
function fun1()  
{  
var win1 = window.open();  
win1.document.write(" <h2> Welcome to the javaTpoint.com </h2>");  
setTimeout(function(){win1.close()}, 2000);  
}  
</script>  
  
</body>  
  
</html>  
 */

/**
 * 
 * 
 * Example3
In the above examples, we have not used any method to prevent the execution of function specified in setTimeout(). Here, we are using the clearTimeout() method to stop the function's execution.
 */

/**
 * 
 * We have to click the given stop button before two seconds to see the effect.

<html>  
<head>  
<title> setTimeout() method </title>  
</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h3> This is an example of using the setTimeout() method </h3>  
<p> Click the following button before 2 seconds to see the effect. </p>  
<button onclick = "stop()"> Stop </button>  
<script>  
var a = setTimeout(fun1, 2000);  
function fun1()  
{  
var win1 = window.open();  
win1.document.write(" <h2> Welcome to the javaTpoint.com </h2>");  
setTimeout(function(){win1.close()}, 2000);  
}  
function stop() {  
  clearTimeout(a);  
}  
</script>  
  
</body>  
  
</html>  


The output will remain same if the user clicks the stop button before two seconds. Otherwise, a new tab will open after two seconds and close after two seconds of opening.
 */