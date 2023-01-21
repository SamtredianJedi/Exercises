// example of Javascript Variable



// var x = 10;

// var y = 20;

// var z = x + y;

// console.log(z);

// JavaScript local variable

//A JavaScript local variable is declared inside block or function. It is accessible within the function or block only. For example:

function abc() {
    var x = 10; // local variable
}

// or 


if (10 < 13) {
    var y = 20; // local variable
}




// Javascript Global Variable


/* A JavaScript global variable is accessible from any function.
 A variable i.e. declared outside the function or 
 declared with window object is known as global variable. */


var data = 200; // global variable 

function a() {
    document.writeln(data)
}

function b() {
    document.writeln(data)
}

a(); // calling Javascript function

b();


// example of a global variable

var value = 50; // global variable
function a() {
    alert(value);
}

function b() {
    alert(value)
}


// Declaring JavaScript global variable within function
// To declare JavaScript global variables inside function, you need to use window object.

function m() {
    window.value = 100; //declaring global variable by windwo object
}

function n() {
    alert(window.value); //accessing global variable from other function 
}


// Internals of global variable in JavaScript

/* When you declare a variable outside the function,
 it is added in the window object internally. You can access it 
 through window object also */

var value = 50;

function a() {
    alert(window.value); //accessing global variable   
}