/**
 * 
 * JavaScript Debouncing
In this article, we will discuss the JavaScript debouncing () method and its implementation.

What is Debouncing?
Debouncing is a method used in JavaScript to increase browser performance. There may be some features on a web page that needs time-consuming computations. If such type of method is applied frequently, it may greatly affect the browser's performance because Javascript is a single-threaded language. Debouncing is a programming technique that assures that time-consuming activities do not trigger the web page's performance decreases. In other words, the Debounce methods do not run when invoked. Instead, they wait a predetermined period of time until executing. When we call the same process again, the previous process is canceled, and the timer is reset.

A debounce is a throttle cousin, and they both help improve the web application's performance. Although, they are seen in different situations. When we just think about the final state, a debounce is used. For example, they are waiting until a user has finished typing to retrieve typeahead search results. If we want to manage all intermediate states at a regulated pace, a throttle is the best tool to use.

Implementation of debouncing
Let's take an example to see the implementation of debounce method in the program.

const debounce = (func, wait) => {  
  let timeout;  
  return function mainFunction(...args) {  
    const later = () => {  
      clearTimeout(timeout);  
      func(...args);  
    };  
    clearTimeout(timeout);  
    timeout = setTimeout(delay, wait);  
  };  
};  
A higher-order function that returns another function is known as a debounce function. It is used to create a closure around the func and wait function parameters and the timeout variable to hold their values. The definitions of the following variables are:

Func: It is the func function that we want to execute after the debounce time.
Wait: The time after the last received action that the debounce function can wait until executing func.
Timeout: The timeout function is the value that is used to indicate a running debounce.
Example:
Let's take an example to understand the debouncing() method in JavaScript. A button is connected to an event listener, which calls a debounce function in the below example. The Debounce function has two parameters: a function and the other is a number (time). A Timer declares, which as the name implies, and calls the debounce function after a certain amount of time.

<!DOCTYPE html>  
<html>   
<body>  
<h1>JavaScript Debounce</h1>  
<input type = "button" id="debounce" value = "Click Here">  
<script>  
var button = document.getElementById("debounce");  
const debounce = (func, wait) => {  
    let debounceTimer  
    return function() {  
        const context = this  
        const args = arguments  
            clearTimeout(debounceTimer)  
                debounceTimer  
            = setTimeout(() => func.apply(context, args), wait)  
    }  
}   
button.addEventListener('click', debounce(function() {  
        alert("Hello\n This message will be displayed after 3 seconds, and no matters how many times we click the button.")  
}, 4000));  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Implementation of debounce function with immediate function
The following debounce implementation returns a function that will not be called as long as it is invoked. After N milliseconds of inactivity, the function will be called again. When the function is called with the initial function as an argument, it called the function immediately and waits for the interval before calling it again.

function debounce(func, wait, immediate) {  
  var timeout;  
  return function mainFunction() {  
    var cont = this;  
    var args = arguments;      
    var later = function() {  
      timeout = null;  
      if (!immediate) func.apply(cont, args);  
    };  
    var callNow = immediate && !timeout;      
    clearTimeout(timeout);  
    timeout = setTimeout(delay, wait);    
    if (callNow) func.apply(cont, args);  
  };  
};  
Debounce returns a function that may be passed on to the function's event listeners when a function and a time interval are passed.

var returnedFunction = debounce(function() {  
}, 3000);  
window.addEventListener('resize', returnedFunction);  
Example:
Let's take an example to understand the use of debounce function with the immediate function.

<!DOCTYPE html>  
<html>  
<body>  
<h1>JavaScript Debounce</h1>  
    <button id="debounce">   
        Click here  
    </button>       
    <script>   
    var button = document.getElementById("debounce");    
    const debounce = (func, wait, immediate)=> {  
    var timeout;  
    return function executedFunction() {  
        var cont = this;  
        var args = arguments;           
        var later = function() {  
        timeout = null;  
        if (!immediate) func.apply(cont, args);  
        };  
        var callNow = immediate && !timeout;          
        clearTimeout(timeout);  
        timeout = setTimeout(later, wait);  
        if (callNow) func.apply(cont, args);  
        };  
    };  
    button.addEventListener('click', debounce(function() {   
            alert("This message will be displayed after 3 seconds, and no matters how many times we click the button.")   
                            }, 3000));   
    </script>   
 </body>  
</html>  
 */

/**
 * 
 * Application Uses
Debouncing can be used to implement suggestive text, where we wait a few seconds for the user to stop typing before proposing the text. As a result, we wait a few seconds after each keystroke before making suggestions. Debouncing is often used on content-loading websites like Facebook and Twitter, where the user continues scrolling. Because there are so many videos and photos, it will have a performance effect if the scroll event is fired too often. As a result, debouncing must be used in the scroll case.
 */