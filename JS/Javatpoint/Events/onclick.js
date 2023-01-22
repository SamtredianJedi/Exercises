/**
 * 
 * JavaScript onclick event
The onclick event generally occurs when the user clicks on an element. It allows the programmer to execute a JavaScript's function when an element gets clicked. This event can be used for validating a form, warning messages and many more.

Using JavaScript, this event can be dynamically added to any element. It supports all HTML elements except <html>, <head>, <title>, <style>, <script>, <base>, <iframe>, <bdo>, <br>, <meta>, and <param>. It means we cannot apply the onclick event on the given tags.

In HTML, we can use the onclick attribute and assign a JavaScript function to it. We can also use the JavaScript's addEventListener() method and pass a click event to it for greater flexibility.

Syntax
Now, we see the syntax of using the onclick event in HTML and in javascript (without addEventListener() method or by using the addEventListener() method).

In HTML
<element onclick = "fun()">  
In JavaScript
object.onclick = function() { myScript };  
In JavaScript by using the addEventListener() method
object.addEventListener("click", myScript);  
Let's see how to use onclick event by using some illustrations. Now, we will see the examples of using the onclick event in HTML, and in JavaScript.

Example1 - Using onclick attribute in HTML
In this example, we are using the HTML onclick attribute and assigning a JavaScript's function to it. When the user clicks the given button, the corresponding function will get executed, and an alert dialog box will be displayed on the screen.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
function fun() {  
alert("Welcome to the javaTpoint.com");  
}  
</script>  
</head>  
<body>  
<h3> This is an example of using onclick attribute in HTML. </h3>  
<p> Click the following button to see the effect. </p>  
<button onclick = "fun()">Click me</button>  
</body>  
</html>  


*/

/**
 * Example2 - Using JavaScript
In this example, we are using JavaScript's onclick event. Here we are using the onclick event with the paragraph element.

When the user clicks on the paragraph element, the corresponding function will get executed, and the text of the paragraph gets changed. On clicking the <p> element, the background color, size, border, and color of the text will also get change.

<!DOCTYPE html>  
<html>  
<head>  
<title> onclick event </title>  
</head>  
<body>  
<h3> This is an example of using onclick event. </h3>  
<p> Click the following text to see the effect. </p>  
<p id = "para">Click me</p>  
<script>  
document.getElementById("para").onclick = function() {  
fun()  
};  
function fun() {  
document.getElementById("para").innerHTML = "Welcome to the javaTpoint.com";  
document.getElementById("para").style.color = "blue";  
document.getElementById("para").style.backgroundColor = "yellow";  
document.getElementById("para").style.fontSize = "25px";  
document.getElementById("para").style.border = "4px solid red";   
}  
</script>  
  
</body>  
</html> 





Example3 - Using addEventListener() method
In this example, we are using JavaScript's addEventListener() method to attach a click event to the paragraph element. When the user clicks the paragraph element, the text of the paragraph gets changed.

On clicking the paragraph, the background color and font-size of elements will also change.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
<h3> This is an example of using click event. </h3>  
<p> Click the following text to see the effect. </p>  
<p id = "para">Click me</p>  
<script>  
document.getElementById("para").onclick = function() {  
fun()  
};  
function fun() {  
document.getElementById("para").innerHTML = "Welcome to the javaTpoint.com";  
document.getElementsByTagName("body")[0].style.color = "blue";  
document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";  
document.getElementsByTagName("body")[0].style.fontSize = "25px";  
document.getElementById("para").style.border = "4px solid red";   
}  
</script>  
  
</body>  
</html>  





 */