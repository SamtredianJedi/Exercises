// Merge Property of Two Objects

/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will merge the property of two objects.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript Object.assign()
Example 1: Merge Property of Two Objects Using Object.assign()
// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);



In the above example, two objects are merged into one using the Object.assign() method.

The Object.assign() method returns an object by copying the values of all enumerable properties from one or more source objects.

Example 2: Merge Property of Two Objects Using Spread Operator
// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);



In the above example, two objects are merged together using the spread operator ....

Note: In both the above examples, if the two objects have the same key, then the second object's key overwrites the first object's key.


 */