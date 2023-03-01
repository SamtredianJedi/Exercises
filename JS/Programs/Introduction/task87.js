// Generate a Random Number Between Two Numbers

/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will generate a random number between two numbers.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Math random()
JavaScript Math floor()
JavaScript parseInt()
If you want to find a random integer in between min (inclusive) to max (inclusive), you can use the following formula:

Math.floor(Math.random() * (max - min + 1)) + min
Example: Integer Value Between Two Numbers
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);





In JavaScript, you can generate a random number with the Math.random() function.

Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1)

The above program will show an integer output between min (inclusive) to max (inclusive).

First, the minimum and maximum values are taken as input from the user. Then the Math.random() method is used to get the random number from the passed value.

The Math.floor() returns the nearest integer value.


 */