/**
 * 
 * Exception Handling in JavaScript
An exception signifies the presence of an abnormal condition which requires special operable techniques. In programming terms, an exception is the anomalous code that breaks the normal flow of the code. Such exceptions require specialized programming constructs for its execution.

What is Exception Handling
In programming, exception handling is a process or method used for handling the abnormal statements in the code and executing them. It also enables to handle the flow control of the code/program. For handling the code, various handlers are used that process the exception and execute the code. For example, the Division of a non-zero value with zero will result into infinity always, and it is an exception. Thus, with the help of exception handling, it can be executed and handled.

In exception handling:

A throw statement is used to raise an exception. It means when an abnormal condition occurs, an exception is thrown using throw.

The thrown exception is handled by wrapping the code into the try…catch block. If an error is present, the catch block will execute, else only the try block statements will get executed.

Thus, in a programming language, there can be different types of errors which may disturb the proper execution of the program.

Types of Errors
While coding, there can be three types of errors in the code:

Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear.
Runtime Error: When an error occurs during the execution of the program, such an error is known as Runtime error. The codes which create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.
Logical Error: An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally. Such an error is known as Logical error.
Error Object
When a runtime error occurs, it creates and throws an Error object. Such an object can be used as a base for the user-defined exceptions too. An error object has two properties:

name: This is an object property that sets or returns an error name.
message: This property returns an error message in the string form.
Although Error is a generic constructor, there are following standard built-in error types or error constructors beside it:

EvalError: It creates an instance for the error that occurred in the eval(), which is a global function used for evaluating the js string code.
InternalError: It creates an instance when the js engine throws an internal error.
RangeError: It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.
ReferenceError: It creates an instance for the error that occurs when an invalid reference is de-referenced.
SyntaxError: An instance is created for the syntax error that may occur while parsing the eval().
TypeError: When a variable is not a valid type, an instance is created for such an error.
URIError: An instance is created for the error that occurs when invalid parameters are passed in encodeURI() or decodeURI().
Exception Handling Statements
There are following statements that handle if any exception occurs:

throw statements
try…catch statements
try…catch…finally statements.
These exception handling statements are discussed in the next section.
 */