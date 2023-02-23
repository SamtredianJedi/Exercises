// Add Two Numbers

/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn how to add two numbers and display their sum using various methods in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Variables and Constants
JavaScript Operators


Example 1: Add Two Numbers


const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);



Example 2: Add Two Numbers Entered by the User


// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);





The above program asks the user to enter two numbers. Here, prompt() is used to take inputs from the user. parseInt() is used to convert the user input string to number.



const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));



Then, the sum of the numbers is computed.

const sum = num1 + num2;
Finally, the sum is displayed. To display the result, we have used the template literal ` `. This allows us to include variables inside strings.

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
To include variables inside ``, you need to use the ${variable} format.

Note: Template literals was introduced in ES6 and some browsers may not support them. To learn more, visit, JavaScript template literals support.







 */