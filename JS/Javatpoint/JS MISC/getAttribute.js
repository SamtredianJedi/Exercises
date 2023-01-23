/**
 * 
 * JavaScript getAttribute() method
The getAttribute() method is used to get the value of an attribute of the particular element. If the attribute exists, it returns the string representing the value of the corresponding attribute. If the corresponding attribute does not exist, it will return an empty string or null.

It is different from the getAttributeNode() method. The getAttributeNode() method returns the attribute as an Attr object.

Syntax
element.getAttribute(attributename)  
Parameter Values
attributename: It is the required parameter. It is the name of the attribute we want to get the value from.

Let us understand it by using some examples.

Example1
In this example, there are two div elements with id div1 and div2, each having style attribute. We are getting the value of style attribute by using the getAttribute() method.

We have to click the given button to get the value of the style attribute of given div elements.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
The getAttribute Method  
</title>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the getAttribute() Method  
</h2>  
  
<div id = "div1" style = "background-color: yellow; font-size: 25px; color: red; border: 2px solid red;">  
This is first div element.  
</div>  
<br>  
<div id = "div2" style = "background-color: lightblue; font-size: 25px; color: blue; border: 2px solid blue;">  
This is second div element.  
</div>  
<br>  
<button onclick = "fun()">  
Click me!  
</button>  
<p id = "p"></p>  
<p id = "p1"></p>  
<script>  
function fun() {  
var val = document.getElementById("div1").getAttribute("style");  
document.getElementById("p").innerHTML = val;  
var val1 = document.getElementById("div2").getAttribute("style");  
document.getElementById("p1").innerHTML = val1;  
}  
</script>  
</body>  
  
</html>  
 */


/**
 * 
 * Example2
We can also get the value of onclick attribute of the button element. In this example, we are extracting the value of onclick attribute and the value of href attribute. There is an anchor element with the href attribute; we are getting this attribute's value using the getAttribute() method.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
The getAttribute Method  
</title>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the getAttribute() Method  
</h2>  
  
<div id = "div1" style = "background-color: yellow; font-size: 25px; color: red; border: 2px solid red;">  
This is the div element.  
</div>  
<br>  
<a href = "http://www.javatpoint.com/" id = "link"> javaTpoint.com </a>  
<br><br>  
<button onclick = "fun()" id = "btn">  
Click me!  
</button>  
<p id = "p"></p>  
<p id = "p1"></p>  
<script>  
function fun() {  
var val = document.getElementById("btn").getAttribute("onclick");  
document.getElementById("p").innerHTML = val;  
var val1 = document.getElementById("link").getAttribute("href");  
document.getElementById("p1").innerHTML = val1;  
}  
</script>  
</body>  
  
</html>  
 */