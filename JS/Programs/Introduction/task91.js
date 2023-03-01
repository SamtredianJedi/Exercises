// Work With Constants


/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program to work with constants.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Variables and Constants
Example: Work With Constants
// program to include constants

const a = 5;
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x; 





JavaScript ES6 has introduced the const keyword to work with constants. const denotes that the reference to value is constant and cannot be changed.

For example,

const a = 5;
a = 44; // throws an error
Constants are block-scoped. Hence the variable defined inside a block represents a different value than the one outside. For example,

{
    const a = 50;
    console.log(a); // 50
}
console.log(a); // 5
The arr array value is changed and a new element is added. In array, the values can be changed. However, the array reference cannot be changed. For example,

const arr = ['work', 'exercise', 'eat'];
arr[3] = 'hello';
Also, the constant should be initialized. You cannot just declare a constant. For example,

const x;
// SyntaxError: const declared variable 'x' must have an initializer.




 */