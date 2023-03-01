// Pass Parameter to a setTimeout() Function





/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will pass a parameter to a setTimeout() function.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
Javascript setTimeout()
The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is:

setTimeout(function, milliseconds);
Its parameters are:

function - a function containing a block of code
milliseconds - the time after which the function is executed
Example 1: Passing Parameter to setTimeout
// program to pass parameter to a setTimeout() function

function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');




In the above program, the greet() function is passed to the setTimeout().

The greet() function then gets called after 3000 milliseconds (3 seconds).

Hence, the program displays the text Hello world only once after 3 seconds.

Example 2: Passing Parameter to Function




// program to pass parameter to function in setTimeout()
function greet(x, y) {
    console.log(x);
    console.log(y);
}

// passing parameter
setTimeout(greet, 3000, 'hello', 'world');
console.log('This message is shown first');






In the above program, additional parameters x and y are required in the greet() function.

When calling the setTimeout() function, additional arguments 'hello' and 'world' are passed which are used by the greet() function.


 */