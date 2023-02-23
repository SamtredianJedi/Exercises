// Print All Prime Numbers in an Interval


/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program to print all the prime numbers between two numbers entered by a user.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript if...else Statement
JavaScript for loop
JavaScript break Statement
A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

For example, 4 is not a prime number because it is divisible by 1, 2 and 4 itself. It is a composite number.

Example: Print Prime Numbers



// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}



In the above program, the user is prompted to enter lower and higher bound numbers. Then the prime number between those numbers (including the lower and higher bounds, if any) are listed out.

Two nested for loops are used in the above program.

The first for loop is used to loop between the numbers provided by the user. In this case, from 2 to 10.
A variable flag is set to 0.
The second for loop is used to loop between 2 to the number that is stored in i.
Inside the second loop, the value of i is divided by each number from 2 to value one less than i (i - 1).
While dividing, if any number remainder results in 0, that number is not a prime number. So the variable flag is set to 1.
Finally, all the numbers that have a flag 0 (not divisible by other numbers) are printed.


 */