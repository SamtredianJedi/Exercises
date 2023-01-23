/**
 * 
 * JavaScript removeAttribute() method
This method is used to remove the specified attribute from the element. It is different from the removeAttributeNode() method. The removeAttributeNode() method removes the particular Attr object, but the removeAttribute() method removes the attribute with the specified name.

Syntax
element.removeAttribute(attributename)  
Parameter Values
attributename: It is the required parameter that specifies the attribute's name to remove from the element. If the attribute doesn't exist, the method doesn't create any error.

Let us understand it by using some examples.

Example1
In this example, there are two paragraph elements with id para, and para1 belongs to the same class jtp. Here, we are removing the class attribute of these paragraph elements. We have to click the given HTML button to see the effect.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
The removeAttribute Method  
</title>  
<style>  
.jtp {  
color: red;  
background-color: yellow;  
}  
</style>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the removeAttribute() Method  
</h2>  
  
<p id = "para" class = "jtp">  
This is a paragraph element.  
</p>  
<p id = "para1" class = "jtp">  
This is second paragraph element.  
</p>  
  
  
<button onclick = "fun()">  
Click me!  
</button>  
  
<script>  
function fun() {  
document.getElementById("para").removeAttribute("class");  
document.getElementById("para1").removeAttribute("class");  
}  
</script>  
</body>  
  
</html>  
 */

/**
 * 
 * Example2
In this example, there are two div elements with id div1 and div2. We are applying the style attribute to these div elements.

Here, we are removing the style attribute of these div elements. We have to click the given HTML button to see the effect.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
The removeAttribute Method  
</title>  
<style>  
.jtp {  
color: red;  
background-color: yellow;  
}  
</style>  
</head>  
<body>  
<h1>  
Welcome to the javaTpoint.com  
</h1>  
  
<h2>  
Example of the removeAttribute() Method  
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
  
<script>  
function fun() {  
document.getElementById("div1").removeAttribute("style");  
document.getElementById("div2").removeAttribute("style");  
}  
</script>  
</body>  
  
</html>


Similarly, we can use the removeAttribute() method to remove the target attribute, align attribute, readonly attribute, and many more.
 */