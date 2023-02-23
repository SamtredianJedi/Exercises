// Find the Largest Among Three Numbers





/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to find the largest among three numbers in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Comparison and Logical Operators
JavaScript if...else Statement
You can find the largest among three numbers using the if...else statement.

Example 1: Largest Number Among Three Numbers





// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);





In the above program, parseFloat() is used to convert numeric string to number. If the string is a floating number, parseFloat() converts the string into floating point number.

The numbers are compared with one another using greater than or equal to >= operator. And the if...else if...else statement is used to check the condition.

Here, logical AND && is also used to check two conditions.

You can also use the JavaScript built-in Math.max() function to find the largest among the numbers.

Example2: Using Math.max()






// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

// display the result
console.log("The largest number is " + largest);





Math.max() returns the largest number among the provided numbers.

You can use Math.min() function to find the smallest among the numbers.


 */