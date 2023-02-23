// Check if a number is Positive, Negative, or Zero






/**
 * 
 * 
 * In this example, you will learn to check whether the number entered by the user is positive, negative or zero.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Comparison and Logical Operators
JavaScript if...else Statement
You will be using the if...else if...else statement to write the program.

Example 1: Check Number Type with if...else if...else




// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}




The above program checks if the number entered by the user is positive, negative or zero.

The condition number > 0 checks if the number is positive.
The condition number == 0 checks if the number is zero.
The condition number < 0 checks if the number is negative.
The above program can also be written using the nested if...else statement.

Example 2: Check Number Type with nested if...else
// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}



 */