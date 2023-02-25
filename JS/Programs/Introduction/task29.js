// Find Factorial of Number Using Recursion


/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that finds the factorial of a number using recursion.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Recursion
JavaScript if...else Statement
The factorial of a number is the product of all the numbers from 1 to that number. For example,

factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

The factorial of a positive number n is given by:

factorial of n (n!) = 1 * 2 * 3 * 4.....n
The factorial of negative numbers do not exist and the factorial of 0 is 1.

Example: Find Factorial Using Recursion




// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}




In the above program, the user is prompted to enter a number.

When the user enters a negative number, a message Enter a positive number. is shown.

When the user enters a positive number or 0, the function factorial(num) gets called.

If the user enters the number 0, the program will return 1.
If the user enters a number greater than 0, the program will recursively call itself by decreasing the number.
This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.
Here,

factorial(4) returns 4 * factorial(3)
factorial(3) returns 4 * 3 * factorial(2)
factorial(2) returns 4 * 3 * 2 * factorial(1)
factorial(1) returns 4 * 3 * 2 * 1 * factorial(0)
factorial(0) returns 4 * 3 * 2 * 1 * 1


 */