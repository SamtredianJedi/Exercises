/**
 * 
 * JavaScript setAttribute()
The setAttribute() method is used to set or add an attribute to a particular element and provides a value to it. If the attribute already exists, it only set or changes the value of the attribute. So, we can also use the setAttribute() method to update the existing attribute's value. If the corresponding attribute does not exist, it will create a new attribute with the specified name and value. This method does not return any value. The attribute name automatically converts into lowercase when we use it on an HTML element.

Although we can add the style attribute using the setAttribute() method, but it is recommended not to use this method for styling. For adding styles, we can use the properties of the style object that will effectively change the style. It can be clear with the following code.

Incorrect way

It is recommended not to use it to change the style.

element.setAttribute("style", "background-color: blue;");  
Correct way

The correct way to change the style is given below.

element.setAttribute.backgroundColor = "blue";  
To get the value of an attribute, we can use the getAttribute() method, and to remove a specific attribute from an element, we can use the removeAtrribute() method.

If we are adding a Boolean attribute such as disabled, then whatever the value it has, it is always considered as true. If we require to set the value of the Boolean attribute to false, we have to remove the entire attribute using the removeAttribute() method.

Syntax
element.setAttribute(attributeName, attributeValue)  
The arguments of this method are not optional. Both parameters must be included when using this method. The parameter values of this method are defined as follows.

Parameter Values
attributeName: It is the name of the attribute that we want to add to an element. It cannot be left empty; i.e., it is not optional.

attributeValue: It is the value of the attribute that we are adding to an element. It is also not an optional value.

Let's understand how to use setAttribute() method by using some illustrations.

Example1
In this example, we are adding a href attribute with a value of "https://www.javatpoint.com/" to the <a> tag with id = "link".

<html>  
<head>  
<title> JavaScript setAttribute() method </title>  
<script>  
function fun() {  
document.getElementById("link").setAttribute("href", "https://www.javatpoint.com/");  
}  
</script>  
</head>  
  
<body style = "text-align: center;">  
<h2> It is an example of adding an attribute using the setAttribute() method. </h2>  
<a id = "link"> javaTpoint.com </a>  
<p> Click the follwing button to see the effect. </p>  
<button onclick = "fun()"> Add attribute </button>  
</body>  
</html>  
 */

/**
 * 
 * 
 * Example2
In this example we are updating the value of a existing attribute using the setAttribute() method. Here, we are converting a textfield to a button by changing the value of type attribute from text to button.

We have to click the specified button to see the effect.

<html>  
<head>  
<title> JavaScript setAttribute() method </title>  
<script>  
function fun() {  
document.getElementById("change").setAttribute("type", "button");  
}  
</script>  
</head>  
  
<body style = "text-align: center;">  
<h2> It is an example to update an attribute's value using the setAttribute() method. </h2>  
<input id = "change"  type = "text" value = "javaTpoint"/>  
<p> Click the follwing button to see the effect. </p>  
<button onclick = "fun()"> Change </button>  
</body>  
</html>  
 */

/**
 * 
 * Example3
Here, we are adding a Boolean attribute disabled to disable the specified button. If we set the value of the disabled attribute to an empty string, then it is automatically sets to true which causes the button to be disabled.

<html>     
   <head>  
      <title> JavaScript setAttribute() method </title>  
      <script>  
            function fun() {  
               document.getElementById("btn").setAttribute("disabled", "");  
            }  
      </script>  
   </head>  
     
   <body style = "text-align: center;">  
   <h2> Example of the setAttribute() method. </h2>  
   <p> Click the following button to see the effect </p>  
<button onclick = "fun()" id = "btn"> Click me </button>  
   </body>  
</html>  
 */