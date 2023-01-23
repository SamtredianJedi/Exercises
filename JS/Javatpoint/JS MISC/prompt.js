/**
 * 
 * JavaScript prompt() dialog box
The prompt() method in JavaScript is used to display a prompt box that prompts the user for the input. It is generally used to take the input from the user before entering the page. It can be written without using the window prefix. When the prompt box pops up, we have to click "OK" or "Cancel" to proceed.

The box is displayed using the prompt() method, which takes two arguments: The first argument is the label which displays in the text box, and the second argument is the default string, which displays in the textbox. The prompt box consists of two buttons, OK and Cancel. It returns null or the string entered by the user. When the user clicks "OK," the box returns the input value. Otherwise, it returns null on clicking "Cancel".

The prompt box takes the focus and forces the user to read the specified message. So, it should avoid overusing this method because it stops the user from accessing the other parts of the webpage until the box is closed.

Syntax
prompt(message, default)  
Values
The parameter values of this function are defined as follows.

message: It is an optional parameter. It is the text displays to the user. We can omit this value if we don't require to show anything in the prompt.

default: It is also an optional parameter. It is a string that contains the default value displayed in the textbox.

Let's see some examples of the JavaScript prompt() method.

Example1
In this example, there is a simple prompt box with a message and two buttons (OK and Cancel). Here, there is an HTML button which is used for displaying the prompt box. We are using the onclick attribute and call the fun() function where the prompt() is defined.

<html>  
<head>  
<script type = "text/javascript">  
function fun() {  
prompt ("This is a prompt box", "Hello world");  
}  
</script>  
</head>  
  
<body>  
<p> Click the following button to see the effect </p>  
<form>  
<input type = "button" value = "Click me" onclick = "fun();" />  
</form>  
</body>  
</html>  
 */

/**
 * 
 * Example2
It is another example of using the prompt() method.

<!DOCTYPE html>  
<html>  
  
<head>  
<title>  
JavaScript prompt() method  
</title>  
<script>  
function fun() {  
var a = prompt("Enter some text", "the javatpoint.com");  
if (a != null) {  
document.getElementById("para").innerHTML = "Welcome to " + a;  
}  
}  
</script>  
</head>  
  
<body style = "text-align: center;">  
<h1 style = "color: red;">  
Hello World  
</h1>  
<h2>  
Example of the JavaScript prompt() method  
</h2>  
  
<button onclick = "fun()">  
Click me  
</button>  
<p id = "para"></p>  
  
  
</body>  
  
</html>  
 */

/**
 * 
 * Example3
In this example, there is a prompt box with a message and buttons. Here, we are using the line-breaks in the message of the box. The line breaks are defined by using the '\n'. The line breaks make the message readable and clear. We have to click the given button to see the effect.

<html>  
   <head>     
      <script type = "text/javascript">  
            function fun() {  
                prompt(" Hello World \n Welcome to the javaTpoint.com \n This is a prompt box ");  
            }  
      </script>       
   </head>  
     
   <body>  
      <p> Click the following button to see the effect </p>        
      <form>  
         <input type = "button" value = "Click me" onclick = "fun();" />  
      </form>       
   </body>  
</html>  
 */