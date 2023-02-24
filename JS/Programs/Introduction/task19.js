// Make a Simple Calculator


/**
 * 
 * 
 * 
 * In this example, you will learn to write a program to make a simple calculator in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript if...else Statement
JavaScript switch Statement
Example 1: Simple Calculator with if..else if...else




// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);




In the above example, the user is prompted to enter an operator (either +, -, * or /) and two numbers.

The parseFloat() converts the numeric string value to a floating-point value.

The if...else if...if statement is used to check the condition that the user has entered for the operator. The corresponding operation is performed and the output is displayed.

Example 2: Simple Calculator with switch





// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}




In above program, the user is asked to enter either +, -, * or /, and two numbers. Then, the switch statement executes cases based on the user input.


 */