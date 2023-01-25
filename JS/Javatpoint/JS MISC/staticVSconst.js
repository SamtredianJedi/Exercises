/**
 * 
 * We make use of both static and const variables in different languages. In this section, we will describe the difference points between both variables. Let's discuss.

What is a Static variable in JavaScript
A static variable is a class property that is used in a class and not on the instance of the class. The variable is stored on the data segment area of the memory, and the same value is shared among every instance created in a class. To use a static variable, we use the static keyword. We can use the static keyword for making a static value, a static function, with classes, operators, properties and work as a utility function for the application or websites. The value of a static variable is set at the run time and is a kind of global value that can be used for the instance of the specified class.

What is a Const variable in JavaScript
A const variable is a variable that has a fixed value and remains the same throughout the program. A property of the const variable is that we cannot change or modify its value throughout the program. It is because as soon as we make a const value, the compiler gets informed that the value is fixed and should be prevented from the programmer. Thus, whenever the programmer tries to modify a const value, an error gets displayed that the const value cannot be changed. To use a const variable, we use a 'const' keyword and input value.

Static vs. Const in JavaScript
There are the following difference points which will let us understand the difference between the two:

Static	Const
The static keyword is used for defining static properties and methods in a javascript class program.	The const keyword is used for defining constant value for a variable.
The static keyword can be accessed on the class definition only. In order to access the static keyword for non-static methods, one needs to invoke them using the class name. However, for calling a static method within another static method, we can make use of this keyword.	A const value can be accessed globally or locally, but a global constant can never be window object properties.
The static methods are the utility functions that are used for creating or cloning the objects.	The const variable is used for declaring a constant or fixed value whose value cannot be changed.
JavaScript static is labeled by a keyword known as the 'static' keyword.	JavaScript const is labeled by a keyword known as the 'const' keyword, where we declare a const variable and initialize it with a constant value.
JavaScript static can be used with classes and methods also.	JavaScript const can be used with objects and arrays also.
The value for a static variable can be reassigned.	The value for a const variable cannot be reassigned. However, we can re-declare the const variable in different block scope as it is allowed.
Above are some difference points that will make us understand the working of both JavaScript keywords. Apart from these theoretical difference descriptions, let's have a look over an example of both through which we can understand the use and working of the static and const variable.

Using JavaScript Static
Below is a practical implementation of using JavaScript static keyword within a class:

<html>  
<head>  
    <title> JavaScript Static</title>  
</head>  
<body>  
    <script>  
              class A {  
                static staticMethod() {  
                return "Calling Static method.";  
                                   }  
              }  
  document.write(A.staticMethod());  
  </script>  
</body>  
</html>
 */

/**
 * 
 * Using Javascript const
Below is a practical implementation of using JavaScript const keyword:

<html>  
<head>  
<title> JavaScript Static</title>  
</head>  
<body>  
     <script>  
const value= 8;  
 try {  
         value= 10;  
}   
     catch (e) {  
  document.write(e);   
} //will display a TypeError   
document.write(value);  
    </script>  
</body>  
</html>  
 */