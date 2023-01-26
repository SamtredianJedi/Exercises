// /**
//  * 
//  * JavaScript print() method
// In this section, we will discuss the print() method in the JavaScript language. A print() method is used to print the currently visible contents like a web page, text, image, etc., on the computer screen. When we use a print() method in JavaScript and execute the code, it opens a print dialog box that allows the user or programmer to select an appropriate option for printing the current content of the window.
//  */

// /**
//  * 
//  * Syntax
// The following syntax is used to print the current content of the window:

// window.print()  
// In the above syntax, we use the window.print() method that prints the currently visible content of the window screen.

// Parameters: It does not contain any parameters.

// Returns: The window.print() method does not return anything.

// Supported Browser of the print() method
// Following are the browsers that support the window.print() method.

// Google Chrome
// Internet Explorer
// Firebox
// Opera
// Safari
// Example 1: Program to print a web page using print() method
// In this program, we are using a window.print() method that prints the current visible content in the window screen.

// print.html

// <html>  
// <head>  
// <title>  
// Use print() method in JavaScript  
// </title>  
// <script type = "text/ javascript">  

// <!-- 

// // -->  
// </script>  
// </head>  
// <body>  
// <h2> Program to print the Current Content of the window using print() method </h2>  
// <br> <br>  
// <p>  
// As the name suggests, the print () method is used to print the contents of the current window. When we use a print () method, it opens the print dialog box, which allows the user or programmer to select an appropriate option for printing the current content of the window. </p>  
// <form>  

// <!-- When a user click on the print button, the onclick function calls the window.print() method to print the currently visible content in the window screen. -->   
// <input type = "button" value = "Print" onclick = "window.print()" />  
// </form>  
// </body>  


// </html>  
//  */

// /**
//  * 
//  * Example 2: Program to print the Student Registration Form using the print() method
// In this program, we create a student registration form and then print it using window,print() method.

// Student.html

// <!-- Create a web page to print the Student registration Form in JavaScript using print() method. -->  
// <html>  
// <head>  
// <title>  
// Print Student Registration Form  
// </title>  
// <script type = "text/javascript">  
// function printFun()  
// {  
// window.print();  
// }  

// </script>  
// <!-- Start the coding for CSS -->  
// <style>  
// /* Create the Outer layout of the Calculator. */  
// .formstyle  
// {  
// width: 400px;  
// height: 400px;  
// margin: 20px auto;  
// border: 3px solid skyblue;  
// border-radius: 5px;  
// padding: 20px;  
// text-align: center;  
// background-color: lightgreen;  
// }  

// /* Display top horizontal bar that contain some information. */  
// h1 {  
//     text-align: center;  
//     padding: 23px;  
//     background-color: skyblue;  
//     color: white;  
//     }  


// *{  
// margin: 0;  
// padding: 0;  
// }  

// </style>  


// </head>  

// <body bgcolor = "lightgrey">  
// <h1> Program to print the Student Registration Form using JavaScript print() method </h1>  


// <div class = "formstyle"  

// <form name = "form1">  
// <fieldset>  
// <br>  
// <legend> Student Registration Form: </legend>  
// <label> First name </label>  
// <input type = "text" name = "fname" size = "30" /> <br>  
// <br>  

// <label> Last name </label>  
// <input type = "text" name = "lname" size = "30" /> <br>  
// <br>  

// <label> Father name </label>  
// <input type = "text" name = "f_name" size = "30" /> <br>  
// <br>  

// <label> Mother name </label>  
// <input type = "text" name = "m_name" size = "30" /> <br>  
// <br>  


// <label> Gender:  
// </label>  
// <input type = "radio" name = "gender" /> Male   
// <input type = "radio" name = "gender" /> Female <br>  
// <br>  


// <label>  
// Address  
// </label>  
// <textarea cols = "30" rows = "3" value = "address">  
// </textarea>  
// <br>  
// <br>  

// <label>  
// Email  
// </label>  
// <input type = "email" id = "email" name = "email" size ="30" /> </br>  
// <br>  

// <label>  
// Password:  
// </label>  
// <input type = "password" id = "pass" name = "pwd" size = "30"> <br>  
// <br>  
// <input type = "reset"  value = "Reset"/>  
// <input style = "background-color:skyblue;" width = 30px height = 20px type = "button" value = "Print" onclick = "printFun()"/>  
// <br> <br>  
// </fieldset>  
// <br>  
// </form>  
// </div>  


// </body>  
// </html>  
//  */

/**
 * 
 * After click on the Print button, it shows the different operations of the window.print method. Once we are done with all settings in the Print dialog box, click on the Save button to save the file or page in your system.

Explanation of the code: In the above program, we have created a student registration form, and this form has two buttons Reset and Print button. The Reset button is used to reset the content, and the Print button is used to print the displayed content. When we click on the Print button, an onclick function will activate and call the PrintFun() function. Now PrintFun() function is executed that contains window.print() method to print the displayed content on the window screen.

Conclusion:
We have learned about the print() method in JavaScript that prints the window screen's content. Where the contents of the window screen may be text, image, advertisement, etc. Furthermore, when a print() method is called in JavaScript, it opens the print dialog box. So that, user or programmer can select the appropriate option for printing displayed content on the window screen.
 */