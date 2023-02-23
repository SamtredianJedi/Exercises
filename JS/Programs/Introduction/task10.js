// Check if a Number is Odd or Even



/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program to check if the number is odd or even.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Comparison and Logical Operators
JavaScript if...else Statement
JavaScript Ternary Operator
Even numbers are those numbers that are exactly divisible by 2.

The remainder operator % gives the remainder when used with a number. For example,

const number = 6;
const result = number % 4; // 2 
Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.

Example 1: Using if...else
// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}






In the above program, number % 2 == 0 checks whether the number is even. If the remainder is 0, the number is even.

In this case, 27 % 2 equals to 1. Hence, the number is odd.

The above program can also be written using a ternary operator.

Example 2: Using Ternary Operator
// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);




 */