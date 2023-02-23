// Generate a Random Number


/**
 * 
 * 
 * In this example, you will learn to generate a random number in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Math random()
JavaScript Math floor()
In JavaScript, you can generate a random number with the Math.random() function.

Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1)

Example 1: Generate a Random Number



// generating  a random number
const a = Math.random();
console.log(a);




Here, we have declared a variable a and assigned it a random number greater than or equal to 0 and less than 1.

Note: You might get a different output in the above program as Math.random() will generate a random number.

We can use this value in the range (0,1) to find the random value between any two numbers using formula:

Math.random() * (highestNumber - lowestNumber) + lowestNumber
Example 2: Get a Random Number between 1 and 10
// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);




This will show a random floating-point number greater than 1 and less than 10.

All the above examples give floating-point random numbers.

You can use Math.floor() to get a random integer value. Math.floor() returns the number by decreasing the value to the nearest integer value. For example,

Math.floor(5.389); // 5
Math.floor(5.9); // 5
The syntax to find the random integer value between two numbers:

Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber
Example 3: Integer Value between 1 and 10





// generating a random number
const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);



This will show integer output between 1 (inclusive) to 10 (exclusive), i.e. (1 to 9). Here, Math.floor() is used to convert decimal to integer value.

Similarly, if you want to find the random integer in between min (inclusive) to max (inclusive), you can use the following formula:

Math.floor(Math.random() * (max - min + 1)) + min
Example 4: Integer Value between Two Numbers (Inclusive)




// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);


This will show the integer output between min (inclusive) to max (inclusive).
 */