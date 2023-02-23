// Swap Two Variables





/**
 * 
 * 
 * 
 * In this example, you will learn to write a program to swap two variables in JavaScript using various methods.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Variables and Constants
JavaScript Operators
Example 1: Using a Temporary Variable



//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);




Here,

We created a temp variable to store the value of a temporarily.
We assigned the value of b to a.
The value of temp is assigned to b
As a result, the value of the variables are swapped.

Note: You can also swap strings or other data types using this method.

Example 2: Using es6(ES2015) Destructuring assignment



//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);



Here, a new es6 feature, called destructuring assignment [a, b] = [b, a], is used to swap the value of two variables. If [a, b] = [1, 2, 3], the value of a will be 1 and value of b will be 2.

First a temporary array [b, a] is created. Here the value of [b, a] will be [2, 4].
The destructuring of the array is done, i.e [a, b] = [2, 4].
As a result, the value of the variables are swapped.

You can learn more about destructuring in JavaScript Destructing Assignment.

Note: You can also swap strings or other data types using this method.

You can also swap the variable's values using the arithmetic operators.

Example 3: Using Arithmetic Operators



//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);




This method only uses the two variables and swaps the value of the variables using arithmetic operators + and -.

Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

To learn more about the type conversion, go to JavaScript Type Conversions.

Let's see how the above program swaps values. Initially, a is 4 and b is 2.

a = a + b assigns the value 4 + 2 to a (now 6).
b = a - b assigns the value 6 - 2 to b (now 4).
a = a - b assign the value 6 - 4 to a (now 2).
Finally, a is 2 and b is 4.

Note: You can use arithmetic operators (+, -) if both variables are of number type.

Example 4: Using Bitwise XOR operator



//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

// XOR operator
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);




Bitwise XOR operator evaluates to true if both operands are different. To learn more about bitwise operators, visit JavaScript Bitwise Operators.

Let's see how the above program swaps values. Initially, a is 4 and b is 2.

a = a ^ b assigns the value 4 ^ 2 to a (now 6).
b = a ^ b assigns the value 6 ^ 2 to b (now 4).
a = a ^ b assign the value 6 ^ 4 to a (now 2).
Finally, a is 2 and b is 4.

Note: You can use this method for only integer (whole number) values.
 */