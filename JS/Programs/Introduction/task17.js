// Check Armstrong Number

/** 
In this example, you will learn to write a program in JavaScript to check whether a number is an Armstrong number or not.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Operators
JavaScript while and do...while Loop
A positive integer is called an Armstrong number (of order n) if

abcd... = an + bn + cn + dn + ...
In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. For example, 153 is an Armstrong number because

153 = 1*1*1 + 5*5*5 + 3*3*3
Similarly, 1634 is an Armstrong number because:

1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
Example 1: Check Armstrong Number of Three Digits










// program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}



The above program takes an input from the user. Then,

The number entered by the user is stored in a temporary variable temp.
A while loop is used to iterate a three-digit value.
The modulus operator % is used to obtain each digit number. When a number is divided by 10, the remainder is the last digit. In the first iteration, 153 % 10 gives 3.
The remainder digit's cube is calculated by multiplying the digit three times. And the cube is added to the sum variable.
The digit is divided by 10 to remove the last digit.
The while loop continues iterating and dividing the number by 10 until the number is 0.
Finally, the sum is compared with the number entered by the user. If the sum and the number are equal, the number is an Armstrong number.
Note: In the above program, the cube of a number could be calculated using an exponent operator **. For example, sum += remainder ** 3;

Example 2: Check Armstrong Number of n Digits





// program to check an Armstrong number of n digits

// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}



In the above program, an Armstrong number of n digits is checked.

When the user enters a number, it is taken as a string. The length property returns the length of a string.

The number entered by the user is stored in a temp variable. And a while loop is used to iterate until its value is less than 0. Each digit of the number is raised to the power of the length of the number.




*/