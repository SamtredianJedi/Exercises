// Empty an Array

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will empty an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
JavaScript Array length
JavaScript Array splice()
Example 1: Empty Array by Substituting New Array
// program to empty an array

function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);




In the above program, the value of array is substituted by a new empty array.

Example 2: Empty Array Using splice()
// program to append an object to an array

function emptyArray(arr) {

    // substituting new array
    arr.splice(0, arr.length);
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);



In the above program, the splice() method is used to remove all the elements of an array.

In the splice() method,

The first argument is the index of an array to start removing an item from.
The second argument is the number of elements that you want to remove from the index element.
Example 3: Empty Array by Setting Length 0
// program to empty an array

function emptyArray(arr) {

    // setting array length to 0
    arr.length = 0;
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);




In the above program, the length property is used to empty the array.

When setting array.length to 0, all the elements of the array are removed.


 */