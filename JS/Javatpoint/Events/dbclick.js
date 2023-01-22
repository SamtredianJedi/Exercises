/**
 * 
 * JavaScript dblclick event
The dblclick event generates an event on double click the element. The event fires when an element is clicked twice in a very short span of time. We can also use the JavaScript's addEventListener() method to fire the double click event.

In HTML, we can use the ondblclick attribute to create a double click event.

Syntax
Now, we see the syntax of creating double click event in HTML and in javascript (without using addEventListener() method or by using the addEventListener() method).

In HTML
<element ondblclick = "fun()">  
In JavaScript
object.ondblclick = function() { myScript };  
In JavaScript by using the addEventListener() method
object.addEventListener("dblclick", myScript);  
Let's see some of the illustrations to understand the double click event.

Example - Using ondblclick attribute in HTML
In this example, we are creating the double click event using the HTML ondblclick attribute.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1 id = "heading" ondblclick = "fun()"> Hello world :):) </h1>  
<h2> Double Click the text "Hello world" to see the effect. </h2>  
<p> This is an example of using the <b> ondblclick </b> attribute. </p>  
<script>  
function fun() {  
document.getElementById("heading").innerHTML = " Welcome to the javaTpoint.com ";  
}  
</script>  
</body>  
</html>  




Example - Using JavaScript
<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1 id = "heading"> Hello world :):) </h1>  
<h2> Double Click the text "Hello world" to see the effect. </h2>  
<p> This is an example of creating the double click event using JavaScript. </p>  
<script>  
document.getElementById("heading").ondblclick = function() { fun() };  
function fun() {  
document.getElementById("heading").innerHTML = " Welcome to the javaTpoint.com ";  
}  
</script>  
</body>  
  
</html>





Example - Using JavaScript's addEventListener() method
<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1 id = "heading"> Hello world :):) </h1>  
<h2> Double Click the text "Hello world" to see the effect. </h2>  
<p> This is an example of creating the double click event using the <b> addEventListener() method </b>. </p>  
<script>  
document.getElementById("heading").addEventListener("dblclick", fun);  
function fun() {  
document.getElementById("heading").innerHTML = " Welcome to the javaTpoint.com ";  
}  
</script>  
</body>  
  
</html>  




 */