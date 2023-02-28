// Include a JS file in Another JS file


/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will include a JS file into another JS file.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Variables and Constants
JavaScript Function and Function Expressions
JavaScript Modules
Example: Using import/export
Let's create a file named module.js (filename can be anything) with the following content:

// program to include JS file into another JS file

const message = 'hello world';

const number = 10;

function multiplyNumbers(a, b) {
    return a * b;
}

// exporting variables and function
export { message, number, multiplyNumbers };




In order to include these variables and functions in another file, say main.js, you can use the import keyword as:

// import the variables and function from module.js
import { message, number, multiplyNumbers } from './modules.js';

console.log(message); // hello world

console.log(number); // 10

console.log(multiplyNumbers(3, 4)); // 12
console.log(multiplyNumbers(5, 8)); // 40
To include another file, you have to export the code that you want to use in another file using the export statement. For example,




export { message, number, multiplyNumbers };
You could also do individual export. For example,

export const message = 'hello world';

export const number = 10;
To include code from another file, you have to use the import statement and import using the file path. For example,

// importing codes from module file
import { message, number, multiplyNumbers } from './modules.js';
Then, you can use these codes as they are a part of the same file.

This helps in writing cleaner, maintainable, and modular code.
 */