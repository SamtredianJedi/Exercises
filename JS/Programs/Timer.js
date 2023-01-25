/**
 * 
 * JavaScript timer
In JavaScript, a timer is created to execute a task or any function at a particular time. Basically, the timer is used to delay the execution of the program or to execute the JavaScript code in a regular time interval. With the help of timer, we can delay the execution of the code. So, the code does not complete it's execution at the same time when an event triggers or page loads.

The best example of the timer is advertisement banners on websites, which change after every 2-3 seconds. These advertising banners are changed at a regular interval on the websites like Amazon. We set a time interval to change them. In this chapter, we will show you how to create a timer.

JavaScript offers two timer functions setInterval() and setTimeout(), which helps to delay in execution of code and also allows to perform one or more operations repeatedly. We will discuss both the timer functions in detail as well as their examples.

Examples
Below are some examples of JavaScript timer using these functions.

setTimeout()
The setTimeout() function helps the users to delay the execution of code. The setTimeout() method accepts two parameters in which one is a user-defined function, and another is the time parameter to delay the execution. The time parameter holds the time in milliseconds (1 second = 1000 milliseconds), which is optional to pass.

The basic syntax of setTimeout() is:

setTimeout(function, milliseconds)  
We will use the setTimeout() function to delay the printing of message for 3 seconds. The message will display on the web after 3 seconds of code execution rather than immediately. Now, let's look at the code below to see how it works:

Execution of code after a delay

<html>  
<body>  
<script>  
function delayFunction() {  
    //display the message on web after 3 seconds on calling delayFunction  
    document.write('<h3> Welcome to JavaTpoint <h3>');   
}  
</script>  
<h4> Example of delay the execution of function <h4>   
  
<!?button for calling of user-defined delayFunction having 3 seconds of delay -->  
<button onclick = "setTimeout(delayFunction, 3000)"> Click Here </button>  
  
</body>  
</html>  
 */


/**
 * 
 * setInterval()
The setInterval method is a bit similar to the setTimeout() function. It executes the specified function repeatedly after a time interval. Or we can simply say that a function is executed repeatedly after a specific amount of time provided by the user in this function. For example - Display updated time in every five seconds.

The basic syntax of setInterval() is:

setInterval(function, milliseconds)  
Similar to setTimeout() method, it also accepts two parameters in which one is a user-defined function, and another is a time-interval parameter to wait before executing the function. The time-interval parameter holds the amount of time in milliseconds (1 second = 1000 milliseconds), which is optional to pass. Now, see the code below how this function works:

Execution of code at a regular interval

<html>  
<body>  
<script>  
function waitAndshow() {  
       //define a date and time variable  
       var systemdate = new Date();  
      
       //display the updated time after every 4 seconds  
       document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();  
}  
  
      //define time interval and call user-defined waitAndshow function  
      setInterval(waitAndshow, 4000);  
</script>  
  
<h3> Updated time will show in every 4 seconds </h3>  
<h3> The current time on your computer is: <br>  
<span id="clock"></span> </h3>  
  
</body>  
</html>  
 */

/**
 * 
 * Example
One more example of setInterval() methods for displaying a message string after every 4 seconds continuously.

<html>  
<body>  
<script>  
function waitAndshow() {  
    //display the message on web on calling delayFunction  
    document.write('<h3> Welcome to JavaTpoint <h3>');   
}  
</script>  
<h3> A string will show in every 4 seconds </h3>  
<!-- call user-defined delayFunction after 4 seconds -->  
<button onclick = "setInterval(waitAndshow, 4000)"> Click Here </button>  
  
</body>  
</html>  
 */


/**
 * 
 * You have seen how to create timer or set time interval. Sometimes, we need to cancel these timers. JavaScript offers the in-built function to clear the timer, which are as follows:

Cancel or Stop the timer
JavaScript offers two functions clearTimeout() and clearInterval() to cancel or stop the timer and halt the execution of code. The setTimeout() and setInterval() both return a unique IDs. These IDs are used by the clearTimeout() and clearInterval() to clear the timer and stop the code execution beforehand. They both take only one parameter, i.e., ID.

Example

In this example, we will use clearTimeout() to clear the timer set by with setTimeout() function. Look at the example how clearInterval() work with setInterval().

Disable the regular interval
<html>  
<body>  
<script>  
function waitAndshow() {  
  //define a date and time variable  
  var systemdate = new Date();  
      
  //display the updated time after every 4 seconds  
  document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();  
}  
  
 //function to disable the time interval  
function stopClock() {  
    clearInterval(intervalID);  
}  
  
//define time interval and call user-defined waitAndshow function  
var intervalID = setInterval(waitAndshow, 3000);  
</script>  
   
<p>Current system time: <span id="clock"> </span> </p>  
  
<!-- button to stop showing time in a regular interval -->  
<button onclick = "stopClock();" > Stop Clock </button>  
</body>  
</html>  
 */