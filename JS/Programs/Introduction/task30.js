// Convert Decimal to Binary





/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that converts a decimal number to a binary number.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
JavaScript while and do...while Loop
Example 1: Convert Decimal to Binary



// program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = prompt('Enter a decimal number: ');

convertToBinary(number);




In the above program, the user is prompted to enter a decimal number. The number entered by the user is passed as an argument to the convertToBinary() function.

The while loop is used until the number entered by the user becomes 0.

The binary value is calculated by:

bin = bin + rem * i;
Here, rem is the modulus % value of the number when divided by 2 and i gives the place value of the binary number.

Example 2: Convert Decimal to Binary Using toString()




// program to convert decimal to binary

// take input
const number = parseInt(prompt('Enter a decimal number: '));

// convert to binary
const result = number.toString(2);

console.log('Binary:' + ' ' + result);




In the above program, the user is prompted to enter a number. The parseInt() method is used to convert a string value to an integer.

The JavaScript built-in method toString([radix]) returns a string value in a specified radix (base). Here, toString(2) converts the decimal number to binary number.


 */