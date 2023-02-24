// Check if the Numbers Have Same Last Digit


/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a program that checks whether the last digit of three numbers is the same or not in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Comparison and Logical Operators
JavaScript if...else Statement
Example: Check the Last Digit





/* program to check whether the last digit of three
numbers is same 

// take input
const a = prompt('Enter a first integer: ');
const b = prompt('Enter a second integer: ');
const c = prompt('Enter a third integer: ');

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if(result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}




In the above example, the user is asked to enter three integers.

The three integer values are stored in variables a, b and c.

The last digit of an integer value is calculated using a modulus operator %.

% gives the remainder value. For example, 58 % 10 gives 8.

All the last digits are then compared using if..else statement and logical AND operator && operator.



 */