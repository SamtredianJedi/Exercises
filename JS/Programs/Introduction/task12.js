// Check Prime Number




/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program to check if a number is a prime number or not.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript for loop
JavaScript if...else Statement
JavaScript break Statement
A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

Example: Check Prime Number





// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}





In the above program, the user is prompted to enter a number. The number entered by the user is checked if it is greater than 1 using if...else if... else statement.

1 is considered neither prime nor composite.
All negative numbers are excluded because prime numbers are positive.
Numbers greater than 1 are tested using a for loop.
The for loop is used to iterate through the positive numbers to check if the number entered by the user is divisible by positive numbers (2 to user-entered number minus 1).

The condition number % i == 0 checks if the number is divisible by numbers other than 1 and itself.

If the remainder value is evaluated to 0, that number is not a prime number.
The isPrime variable is used to store a boolean value: either true or false.
The isPrime variable is set to false if the number is not a prime number.
The isPrime variable remains true if the number is a prime number.


 */