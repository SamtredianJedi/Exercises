// Find HCF or GCD





/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a program that finds HCF or GCD in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript for loop
JavaScript if...else Statement
JavaScript while and do...while Loop
The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).

For example, the HCF of 60 and 72 is 12.

Example 1: Find HCF using for Loop






// program to find the HCF or GCD of two integers

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);





In the above program, the user is prompted to enter two positive numbers.

The for loop is used to iterate from 1 to numbers entered by the user.

The if condition and modulus operator % is used to find the HCF of both numbers.

In the above condition, if both the integers number1 and number2 are exactly divisible by i, the highest integer value that fulfils that condition is calculated.

Example 2: HCF using while Loop and if...else






// program to find the HCF or GCD of two integers

// take input
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

// display the hcf
console.log(`HCF is ${number1}`);





In the above program, a while loop is used with an if...else statement.

In each iteration, the smaller integer is subtracted from the larger integer. And the result is assigned to a variable holding the larger integer.

The while loop continues until both the integers become equal.
 */