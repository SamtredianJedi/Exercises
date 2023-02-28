// Split Array into Smaller Chunks


/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will split an array into smaller chunks of array.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array slice()
JavaScript Array splice()
JavaScript Arrays
Example 1: Split Array Using slice()
// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);





In the above program, the for loop is used with the slice() method to split an array into smaller chunks of array.

The for loop iterates through the elements of an array. During each iteration, the value of i is increased by chunk value (here 2).

The slice() method extracts elements from an array where:

The first argument specifies the starting index.
The second argument specifies the ending index.
Example 2: Split Array Using splice()
// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);





In the above program, the while loop is used with the splice() method to split an array into smaller chunks of an array.

In the splice() method,

The first argument specifies the index where you want to split an item.
The second argument (here 2) specifies the number of items to split.
The while loop is used to iterate over the array until the array is empty.


 */