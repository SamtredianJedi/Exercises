/**
 * 
 * JavaScript try…catch
A try…catch is a commonly used statement in various programming languages. Basically, it is used to handle the error-prone part of the code. It initially tests the code for all possible errors it may contain, then it implements actions to tackle those errors (if occur). A good programming approach is to keep the complex code within the try…catch statements.

Let's discuss each block of statement individually:

try{} statement: Here, the code which needs possible error testing is kept within the try block. In case any error occur, it passes to the catch{} block for taking suitable actions and handle the error. Otherwise, it executes the code written within.

catch{} statement: This block handles the error of the code by executing the set of statements written within the block. This block contains either the user-defined exception handler or the built-in handler. This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.

Note: catch {} statement executes only after the execution of the try {} statement. Also, one try block can contain one or more catch blocks.
Syntax:
try{  
expression; } //code to be written.  
catch(error){  
expression; } // code for handling the error.  
try…catch example
<html>  
<head> Exception Handling</br></head>  
<body>  
<script>  
try{  
var a= ["34","32","5","31","24","44","67"]; //a is an array  
document.write(a);    // displays elements of a  
document.write(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  
}catch(e){  
alert("There is error which shows "+e.message); //Handling error  
}  
</script>  
</body>  
</html>  



 */


/**
 * 
 * Throw Statement
Throw statements are used for throwing user-defined errors. User can define and throw their own custom errors. When throw statement is executed, the statements present after it will not execute. The control will directly pass to the catch block.

Syntax:
throw exception;  
try…catch…throw syntax
try{  
throw exception; // user can define their own exception  
}  
catch(error){  
expression; }  // code for handling exception.  
The exception can be a string, number, object, or boolean value.

throw example with try…catch
<html>  
<head>Exception Handling</head>  
<body>  
<script>  
try {  
   throw new Error('This is the throw keyword'); //user-defined throw statement.  
}  
catch (e) {  
  document.write(e.message); // This will generate an error message  
}  
</script>  
</body>  
</html>  
 */


/**
 * 
 * With the help of throw statement, users can create their own errors.

try…catch…finally statements
Finally is an optional block of statements which is executed after the execution of try and catch statements. Finally block does not hold for the exception to be thrown. Any exception is thrown or not, finally block code, if present, will definitely execute. It does not care for the output too.

Syntax:
try{  
expression;  
}  
catch(error){  
expression;  
}  
finally{  
expression; } //Executable code  
try…catch…finally example
<html>  
<head>Exception Handling</head>  
<body>  
<script>  
try{  
var a=2;  
if(a==2)  
document.write("ok");  
}  
catch(Error){  
document.write("Error found"+e.message);  
}  
finally{  
document.write("Value of a is 2 ");  
}  
</script>  
</body>  
</html>   
 */