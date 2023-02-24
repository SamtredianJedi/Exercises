// Find LCM



/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that finds the LCM of two numbers.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript if...else Statement
JavaScript while and do...while Loop
JavaScript for loop
The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.

For example, the LCM of 6 and 8 is 24.

Example 1: LCM Using while Loop and if Statement





// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}



In the above program, the user is prompted to enter two positive integers.

The greater number among the numbers provided by the user is stored in a min variable. The LCM of two numbers cannot be less than the greater number.

The while loop is used with an if statement. In each iteration,

The variable min is divided by both the num1 and num2.
If both numbers' remainders are equal to 0, then it is the LCM and the break statement terminates the program.
If both numbers' remainders are not equal to 0, the value of min is increased by 1 and the loop continues.
The while loop continues until the condition is met.
if (min % num1 == 0 && min % num2 == 0)
The LCM of two numbers can also be found using the formula:

LCM = (num1*num2) / HCF
To learn about how to find the HCF, visit the JavaScript program to find HCF.

Example 2: LCM Calculation Using HCF




// program to find the LCM of two integers

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);




In the above program, firstly HCF of the numbers is calculated. Then LCM is calculated using the given formula.

 */