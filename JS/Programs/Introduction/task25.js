// Find Sum of Natural Numbers Using Recursion


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that finds the sum of natural numbers using recursion.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
JavaScript Recursion
The positive integers 1, 2, 3, ... are known as natural numbers.

Example: Sum of Natural Numbers Using Recursion




// program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);




In the above program, the user is prompted to enter a number.

Then the sum() function is called by passing the parameter (here 5) that the user entered.

If the number is greater than 0, the function calls itself by decreasing the number by 1.
This process continues until the number is 1. When the number reaches 0, the program stops.
If the user enters a negative number, the negative number is returned and the program stops.



 */