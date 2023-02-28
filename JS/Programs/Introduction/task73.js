// Remove Duplicates From Array




/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that removes duplicate values from an array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array indexOf()
JavaScript Array push()
Example 1: Using indexOf() and push()
// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);




In the above program, the duplicate elements are removed from array.

Here,

The for...of loop is used to loop through all the elements of an arr array.
The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().
Example 2: Using Set
// program to remove duplicate value from an array

function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);





In the above program, Set is used to remove duplicate items from an array.

A Set is a collection of unique values.

Here,

The array is converted to Set and all the duplicate elements are automatically removed.
The spread syntax ... is used to include all the elements of the Set to a new array.


 */