/**
 * 
 * Javascript Setinterval
Javascript can be made to execute a block of code at specific intervals of time. These intervals are critically defined as time events. There are usually two methods for the same. They can be specifically used according to your requirements. Those two methods are:

setInterval()
setTimeout()
Here, we will discuss the setInterval() method in javascript. So, let's get started.

The main function of the setInterval() method is to call a function that helps in the evaluation of an expression at specific intervals, mostly in milliseconds. The setInterval() function continues to call the function until and unless the window is closed using the clearInterval() function. Later, the returned value by the method setInterval() is taken into account as parameters for the clearInterval() method.

If we want to execute the function only once after the specified number of milliseconds, we would be using setTimeout() which defines the same.

1000 ms = 1 second

The setInterval() method in javascript executes a block of code in terms of defined repeated intervals.

Syntax
setInterval(function, milliseconds);  
function: contains the block of executable code

milliseconds: the defined time interval of your function execution.

Example Code:
function Display()  
{  
    console.log("Hello JavaTpoint");  
}  
  
setInterval(Display, 2000);  
In the above code, the setInterval function is set at 2000 milliseconds i.e. for 2 seconds. Thus, it will call the Display() function after every 2 seconds and the output is displayed continuously after every 2 seconds, as shown below.

Hello JavaTpoint  
Hello JavaTpoint  
Hello JavaTpoint  
.  
.  
...  
There are also some different approaches for customizing your function. Consider the below example for instance.

var myVar;  
  
function Example()   
{  
  myVar = setInterval(shock, 3000);  
}  
  
function shock()   
{  
  alert(" Hi ! ");  
}  
In the above code, we have defined two functions. The first function takes the second function as a parameter and executes the block inside it every 3 seconds. We have also defined a variable myVar which acts as a temporary variable for storing the interval. The output of the above code is shown as an alert in the browser dropdown with the message " Hi ! ".

The setInterval() method will be repeatedly executed until and unless it is stopped by using the clearInterval() method. To illustrate this, consider the below example code for instance.

var logic = setInterval(Time, 2000);  
  
function Time() {  
  var x = new Date();  
  var y = x.toLocaleTimeString();  
  }  
  
function FunctionStop() {  
  clearInterval(logic);  
}  
In the above code, we have defined variable logic whose interval is set after every 2 seconds. In the given functions, we have defined two more variables x and y, which would store data and time in the form of integer and string. Whenever you call the function Time, it will display the current time every 2 seconds, and the clearInterval() method will erase the time after every interval whenever the time is displayed. This will lead to a variation in time in terms of seconds and hence there would not be any manual task to remove the previous displayed time. The output will look something like this.

1:47:41 AM  
1:47:43 AM  
1:47:45 AM  
1:47:47 AM  
1:47:49 AM  
In both examples shown above, we have discussed the basic interval methods that can be made. The setInterval() methods can be customized using HTML and CSS. We can rather change the display in terms of colors or define them dynamically using web pages in HTML.

Consider the below code:

var display = setInterval(() => {   
  Color()   
}, 500);  
  
function setColor() {      
  var a = document.body;      
  aa.style.backgroundColor = a.style.backgroundColor == "yello" ? "red" : "green";  
}  
  
function ColorStop() {  
  clearInterval(display);  
}  
In the above code snippet, we have defined a variable display(), which would display colors after the interval of 500 milliseconds. The other function setColor() will set the color of the body to respective colors provided after every interval. The next function ColorStop() is used to stop the interval after every interval. Whenever the function display() is called, the other function starts execution in the intervals defined as 500 and after each interval, the color is changed automatically. It is quite easy to understand that the color will change the background from red, green, or yellow.

Features
The setInterval() method executes the methods multiple times in milliseconds thereby keeping a rhythm(i.e. 1 second= 1000 ms).
The setInterval() method will continuously keep calling the defined function until and unless it is manually defined by another function clearInterval() to close the window.
The method setInterval() returns an ID used by the method clearinterval() to stop the execution of regular intervals.
If we desire to execute a function only once, we can probably use the method setTimeout(). It will run the function only once.
If you only need to execute a function one time, use the setTimeout() method.
 */