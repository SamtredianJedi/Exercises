/**
 * 
 * JavaScript hide elements
In JavaScript, we can hide the elements using the style.display or by using the style.visibility. The visibility property in JavaScript is also used to hide an element. The difference between the style.display and style.visibility is when using visibility: hidden, the tag is not visible, but space is allocated. Using display: none, the tag is also not visible, but there is no space allocated on the page.

In HTML, we can use the hidden attribute to hide the specified element. When the hidden attribute in HTML sets to true, the element is hidden, or when the value is false, the element is visible.

Syntax
The general syntax to hide an element using style.hidden and style.visibility is given as follows.

Using style.hidden

document.getElementById("element").style.display = "none";  
Using style.visibility

document.getElementById("element").style.visibility = "none";  
Now, let's see some examples to understand the hiding of elements in javascript.

Example1
In this example, we will see how to remove elements by using JavaScript's style.display property. Here, there is a div element and a paragraph element that gets hide on clicking the given HTML button. We have to click the 'Click me!' button to see the effect.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
style.display  
</title>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the JavaScript's style.display property  
</h2>  
  
<div id = "div" style = "background-color: yellow; font-size: 25px; color: red; border: 2px solid red;">  
This is the div element.  
</div>  
<p id = "p"> This is a paragraph element. </p>  
<button onclick = "fun()" id = "btn">  
Click me!  
</button>  
  
<script>  
function fun() {  
document.getElementById("div").style.display = "none";  
document.getElementById("p").style.display = "none";  
}  
</script>  
</body>  
  
</html>  
 */

/**
 * 
 * Example2
In this example, we will see how to hide elements by using JavaScript's style.visibliity property. Here, a div element and a paragraph element get hidden, but their space is still allocated.

We have to click the 'Click me!' button to see the effect.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
style.visibility  
</title>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the JavaScript's style.visibility property  
</h2>  
  
<div id = "div" style = "background-color: yellow; font-size: 25px; color: red; border: 2px solid red;">  
This is the div element.  
</div>  
<p id = "p"> This is a paragraph element. </p>  
<button onclick = "fun()" id = "btn">  
Click me!  
</button>  
  
<script>  
function fun() {  
document.getElementById("div").style.visibility = "hidden";  
document.getElementById("p").style.visibility = "hidden";  
}  
</script>  
</body>  
  
</html>  
 */

/**
 * 
 * Example3
In this example, we are using both style.display and style.visibility JavaScript properties to see the difference between both of them. Here, there is a div element and <h3> heading element on which we are applying the properties. We are hiding the div element by applying the style.display property, and hiding the <h3> element by applying the style.visibility property.

We have to click the 'Click me!' button to see the effect.
 */

/**
 * 
 * <!DOCTYPE html>  
<html>  
<head>  
<title>  
JavaScript hide elements  
</title>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Using both style.visibility and style.display properties  
</h2>  
  
<div id = "div" style = "background-color: yellow; font-size: 25px; color: red; border: 2px solid red;">  
This is the div element.  
</div>  
<p> This is a paragraph element. </p>  
<h3 id = "heading"> This is the heading after the paragraph element. </h3>  
<button onclick = "fun()" id = "btn">  
Click me!  
</button>  
  
<script>  
function fun() {  
document.getElementById("div").style.visibility = "hidden";  
document.getElementById("heading").style.display = "none";  
}  
</script>  
</body>  
  
</html>  
 */