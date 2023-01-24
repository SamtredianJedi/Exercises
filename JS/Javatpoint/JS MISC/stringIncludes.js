/**
 * 
 * 
 * JavaScript string includes()
The JavaScript string includes() method is used to determine whether or not the specified substring is present in the given string. It is a case-sensitive method. It returns the Boolean value, either true or false. It returns true if the string contains the specified substring and returns false if not.

It does not change the value of the original string.

Syntax
The following syntax represents the includes() method:

string.includes(searchValue, start);  
Parameter values
The parameter values of this method are defined as follows:

searchValue: It is a required parameter. It is the substring to search for.

start: It is an optional parameter. It represents the position where to start the searching in the string. Its default value is 0. When it is omitted, the search will begin from the initial position of the string, i.e., from 0.

Let's understand the includes() method using some examples.

Example1
It is a simple example to determine whether the given string contains the specified substring. Here, we are declaring a variable str and assigning a string value 'Welcome to the javaTpoint.com' to it. Then we use the includes() method for determining whether the given substring ('to') is present or not.

Here, we are not defining the position to start the search. So, the search will begin from the initial position of the string.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1> Hello world :):) </h1>  
<h3> This is an example of using the JavaScript's string includes() method. </h3>  
<script>  
let str = "Welcome to the javaTpoint.com";    
document.write(" <b> The given string is: </b>", str);  
document.write("<br>");  
let res = str.includes('tO');  
document.write(" <b> The result is: </b> ", res);   
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example2
In this example, we are determining whether the includes() method is case-sensitive or not. The given string is 'Welcome to the javaTpoint.com'. We are searching for the substring 'TO' in the given string.

Although the word 'to' is present in the given string, but the method is case-sensitive so, it will return the Boolean value false.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1> Hello world :):) </h1>  
<h3> This is an example of using the JavaScript's string includes() method. </h3>  
<p> Here, we are searching for the substring <b> 'TO' </b> in the given string. </p>  
<script>  
let str = "Welcome to the javaTpoint.com";    
document.write(" <b> The given string is: </b>", str);  
document.write("<br>");  
let res = str.includes('TO');  
document.write(" <b> The result is: </b> ", res);   
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example3
In this example, we are defining the position to start the search. So, the searching will start from the specified position.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
  
<body>  
<h1> Hello world :):) </h1>  
<h3> This is an example of using the JavaScript string includes() method. </h3>  
<script>  
let str = "Welcome to the javaTpoint.com";    
document.write(" <b> The given string is: </b>", str);  
document.write("<br>");  
let res = str.includes('the', 10);  
document.write(" <b> The result of str.includes('the', 10) is : </b> ", res);   
</script>  
</body>  
</html>  
 */