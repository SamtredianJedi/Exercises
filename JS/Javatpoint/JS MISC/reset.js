/**
 * 
 * JavaScript reset
In HTML, we can use the reset button to reset the form. In this article, we are discussing how to reset the form using JavaScript.

In JavaScript, the reset() method does the same thing as the HTML reset button. It is used to clear all the values of the form elements. It can be used to set the values to default. It does not require any parameter values and also does not return any value.

Syntax
formElement.reset()  
Example
To illustrate the use of reset() method in JavaScript, we are creating a simple HTML document into which we have created a form with the id = "myForm". In this form, there are four text fields: "First Name", "Last Name", "Age", and "E-mail Id". There are two buttons that are "Submit", and "Reset data". When we click the Reset data button, it calls the function fun(), where we have defined the JavaScript's reset() method.

In the function fun(), we are first taking the reference of the form required to reset, and then we are applying the reset() method over it. Now, let's see the code for the same.

<!DOCTYPE html>   
<html>  
<head>   
<title> reset() method </title>  
</head>  
<body style = "text-align: center;">  
<div style = "background: pink;">  
  <font color = "red" size = "6px">  
    <b> Example of the reset() method </b>  
  </font>  
 </div>  
    <div style = "background: lightblue;">  
    <form id = "myForm" action = "#" style = "font-size: 20px;" >  
    <p> First Name: <input type = "text" id = "fname" /></p>  
    <p> Last Name: <input type = "text" id = "lname" /></p>  
    <p> E-mail Id:   <input type = "email" id = "email" /></p>  
    <p> Age:         <input type = "number" id = "age" /></p>  
    <input type = "submit">  
    <input type = "button" value = "Reset data" onClick = "fun()"/>  
    </form>  
    </div>  
<script>  
 function fun(){  
   document.getElementById("myForm").reset();  
 }   
</script>  
  
</body>  
</html>  
 */