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