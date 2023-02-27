// Remove Specific Item From an Array


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will remove a specific item from an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array push()
JavaScript Array splice()
JavaScript for loop
Example 1: Using For Loop
// program to remove item from an array

function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);





In the above program, an item is removed from an array using a for loop.

Here,

The for loop is used to loop through all the elements of an array.
While iterating through the elements of the array, if the item to remove does not match with the array element, that element is pushed to newArray.
The push() method adds the element to newArray.
Example 2: Using Array.splice()
// program to remove item from an array

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);





In the above program, an array and the element to be removed is passed to the custom removeItemFromArray() function.

Here,

const index = array.indexOf(2);
console.log(index); // 1
The indexOf() method returns the index of the given element.
If the element is not in the array, indexOf() returns -1.
The if condition checks if the element to remove is in the array.
The splice() method is used to remove the element from an array.
Note: The above program only works for arrays without duplicate elements.

Only the first element of an array that matches is removed.

For example,

[1, 2, 3, 2, 5] results in [1, 3, 2, 5]


 */