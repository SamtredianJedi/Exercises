// Count the Number of Keys/Properties in an Object

/**
 * 
 * 
 * 
 * 
 * n this example, you will learn to write a JavaScript program that will count the number of keys/properties in an object.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript for...in loop
Javascript Object.keys()
Example 1: Count the Number of Key in an Object Using for...in




// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);




he above program counts the number of keys/properties in an object using the for...in loop.

The count variable is initially 0. Then, the for...in loop increases the count by 1 for every key/value in an object.

Note: While using the for...in loop, it will also count inherited properties.

For example,

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

const person = {
    gender: 'male'
}

student.__proto__ = person;

let count = 0;

for(let key in student) {

    // increase the count
    ++count;
}

console.log(count); // 4




If you only want to loop through the object's own property, you can use the hasOwnProperty() method.

if (student.hasOwnProperty(key)) {
    ++count:
}
Example 2: Count the Number of Key in an Object Using Object.key()
// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);




In the above program, the Object.keys() method and the length property are used to count the number of keys in an object.

The Object.keys() method returns an array of a given object's own enumerable property names i.e. ["name", "age", "hobbies"].

The length property returns the length of the array.


 */