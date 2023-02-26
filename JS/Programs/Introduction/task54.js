// Convert Objects to Strings





/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will convert objects to strings.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript and JSON
Example 1: Convert Object to String Using JSON.stringify()
// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);





In the above example, the JSON.stringify() method is used to convert an object to a string.

The typeof operator gives the data type of the result variable.

Example 2: Convert Object to String Using String()
// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);




In the above example, the String() function converts the value of an object to a string.

When using the String() function on an Object, the converted result will give [object Object].

The typeof operator gives the data type of the result variable.



 */