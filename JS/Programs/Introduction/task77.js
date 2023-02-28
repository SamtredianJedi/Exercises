// Extract Given Property Values from Objects as Array



/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will extract the value of a property as an array from an array of objects.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array push()
JavaScript Array map()
JavaScript Objects
Example 1: Extract Value Using map()
// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);





In the above program, the property's value of key a is extracted from each object of an array.

The map() method is used to iterate through all the elements of an array and extract property values of key a.

Note: You could also use a regular function instead of an arrow function.

let extractedValue = arr.map(function(item) {return item[prop]});
Example 2: Extract Value Using for Loop
// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {

        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);





In the above program, the property value of key a is extracted from each object of an array.

Initially, the extractedValue array is empty.
The for loop is used to iterate through all the elements of an array.
During each iteration, the value of property a is pushed to the extractedValue array.


 */