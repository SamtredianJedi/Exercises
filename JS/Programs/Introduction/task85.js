// Set a Default Parameter Value For a Function





/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will set a default parameter value for a function.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
JavaScript Default Parameters
The syntax to set the default parameter value for a function is:

function functionName(param1=default1, param2=default2, ...) {
    // function body
}
Example 1: Set Default Parameter Value For a Function
// program to set default parameter value

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());




In the above example, the default value of x is 3 and the default value of y is 5.

sum(5, 15) - When both arguments are passed, x takes 5 and y takes 15.
sum(7) - When 7 is passed to the sum() function, x takes 7 and y takes the default value 5.
sum() - When no argument is passed to the sum() function, x takes the default value 3 and y takes the default value 5.
Example 2: Using Previous Parameter in Another Parameter
// using previous parameter in default value expression

let calculate = function(x = 15, y = x + 2) {
    return x + y;
}

const result1 = calculate(10);
console.log(result1);

const result2 = calculate();
console.log(result2);




You can also pass a parameter as the default value for another parameter.

In the above program,

When 10 is passed to the calculate() function, x becomes 10, and y becomes 12 (the sum function returns 22).
When no value is passed to the calculate() function, x becomes 15, and y becomes 17 (the sum function returns 32).


 */