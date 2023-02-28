// Check if An Object is An Array

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if an object is an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

Javascript Array isArray()
JavaScript Function and Function Expressions
JavaScript Arrays
Example: Check Array Using Array.isArray()
// program to check if an object is an array

function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

const array = [1, 2, 3];

// call the function
checkObject(array);




In the above program, the Array.isArray() method is used to check if an object is an array.

The Array.isArray() method returns true if an object is an array, otherwise returns false.

Note: For an array, the typeof operator returns an object.

For example,

const arr = [1, 2, 3];
console.log(typeof arr); // object


 */