// Add Element to Start of an Array

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that adds a new element at the beginning of an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array unshift()
JavaScript Array splice()
JavaScript Array concat()
Example 1: Add Element to Array Using unshift()
// program to add element to an array

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);





In the above program, the new element is added to the array variable using the unshift() method.

The unshift() method adds a new element at the beginning of an array.

Example 2: Add Element to Array Using splice()
// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);




In the above program, the splice() method is used to add a new element to an array.

In the splice() method,

The first argument is the index of an array where you want to add an element.
The second argument is the number of elements that you want to remove from the index element.
The third argument is the element that you want to add to the array.
Example 3: Add Element to Array Using Spread Operator
// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(arr);




In the above program, the spread operator ... is used to add a new element to the beginning of an array.

arr = [4, ...arr]; takes first element as 4 and the rest elements are taken from array.

Example 4: Add Element to Array Using concat()
// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4].concat(arr);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);



In the above program, the concat() method is used to add a new element to an array.

The concat() method combines two arrays into one.


 */