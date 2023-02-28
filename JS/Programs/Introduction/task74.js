// Merge Two Arrays and Remove Duplicate Items

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will merge two arrays and remove duplicate items from an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array concat()
JavaScript Set and WeakSet
JavaScript Spread Operator
Example 1: Using concat() and for Loop
// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);




In the above program, the two array elements are merged together and the duplicate elements are removed.

Here,

The two arrays are merged using the concat() method.
The for...of loop is used to loop through all the elements of arr.
The indexOf() method returns -1 if the element is not in the array.
Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.

Example 2: Using Spread Syntax and Set
// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array1, array2);




In the above program, two arrays are merged together and Set is used to remove duplicate items from an array.

The Set is a collection of unique values.

Here,

Two array elements are merged together using the spread syntax ...
The array is converted to Set and all the duplicate elements are automatically removed.
The spread syntax ... is then used to include all the elements of the set back to an array.


 */