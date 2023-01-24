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


/**
 * 
 * Example2
Here, we are interrupting a function using the return statement. The function stops executing immediately when the return statement is called.

There is an infinite while loop and variable i, which is initialized to 1. The loop continues until the value of i reached to 4. When the variable's value will be 4, the loop stops its execution because of the return statement. The statement after the loop will never get executed.

Here, the return statement is without using the expression, so it returns undefined.

<!DOCTYPE html>   
<html>   
  
<head>   
</head>   
  
<body>  
<h2> Welcome to the javaTpoint.com </h2>  
<h3> Example of the JavaScript's return statement </h3>  
    <script>   
    var x = fun();  
function fun() {  
var i = 1;  
  while(i) {   
    document.write(i + '<br>');  
      if (i == 4) {            
        return;  
      }  
      document.write(i + '<br>');  
      i++;  
    }  
  document.write('Hello world');  
}  
</script>   
</body>   
  
</html>  
 */


/**
 * 
 * Now, we will see how to return multiple values using the return statement. Usually, the JavaScript functions returns a single value, but we can return multiple values by using the array or object. To return multiple values, we can pack the values as the object's properties or array elements.

Example3 - Returning multiple values using Array
In this example, we are returning multiple values by using the Array. Here, we are using the ES6 Array destructuring syntax to unpack the values of array.

<!DOCTYPE html>  
<html>  
<head>  
<title> JavaScript return </title>  
</head>  
<body>  
<h1> Welcome to the javaTpoint.com </h1>  
<h3> This is an example of returning multiple values using array </h3>  
<script>  
function getData() {  
let fname = 'John',  
lname = 'Rickman',  
age = '25',  
occupation = 'Private Employee';  
  
return [fname, lname, age, occupation];  
}  
const [fname, lname, age, occupation] = getData();  
  
document.write("Name = " + fname + " " + lname + "<br>");  
document.write("Age = " + age + "<br>");  
document.write("Occupation = " + occupation);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example4 - Returning multiple values using object
In this example, we are returning multiple values by using the Object. Here, we are using the ES6 Object destructuring syntax to unpack the values of the object.



<!DOCTYPE html>  
<html>  
<head>  
<title> JavaScript return </title>  
</head>  
<body>  
<h1> Welcome to the javaTpoint.com </h1>  
<h3> This is an example of returning multiple values using object </h3>  
<script>  
function getData() {  
let fname = 'John',  
lname = 'Rickman',  
age = '25',  
occupation = 'Private Employee';  
  
return {  
fname,  
lname,  
age,  
occupation  
};  
}  
let {fname, lname, age, occupation} = getData();  
document.write("Name = " + fname + " " + lname + "<br>");  
document.write("Age = " + age + "<br>");  
document.write("Occupation = " + occupation);  
</script>  
</body>  
</html>
 */