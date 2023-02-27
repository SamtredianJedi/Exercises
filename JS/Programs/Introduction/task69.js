// Append an Object to An Array

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will append an object to an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array push()
JavaScript Array splice()
JavaScript Spread Operator
Example 1: Append Object to Array Using push()
// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);




In the above program, the push() method is used to add an object to an array.

The push() method adds an item to the end of an array.

Example 2: Append Object to Array Using splice()
// program to append an object to an array

function insertObject(arr, obj) {

   // find the last index
    let index = arr.length;

    // appending object to end of array
    arr.splice(index, 0, object);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);





In the above program, the splice() method is used to add an object to an array.

The splice() method adds and/or removes an item.

In the splice() method,

The first argument represents the index where you want to insert an item.
The second argument represents the number of items to be removed (here, 0).
The third argument represents the element that you want to add to an array.
Example 3: Append Object Using Spread Operator
// program to append an object to an array

function insertObject(arr, obj) {

   // append object
    arr = [...arr, object];
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);





In the above program, the spread operator ... is used to add an object to an array.

The spread syntax allows you to copy all the elements to an array. Then, the object is added to the end of the array.


 */