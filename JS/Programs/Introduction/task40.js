// Remove a Property from an Object

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will remove a property from an object.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
An object is written in a key/value pair. The key/value pair is called a property. For example,

const student = {
    name: 'John',
    age: 22
}
Here, name: 'John' and age: 22 are the two properties of a student object.

Example: Remove a Property From an Object




// program to remove a property from an object

// creating an object
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);




In the above program, the delete operator is used to remove a property from an object.

You can use the delete operator with . or [ ] to remove the property from an object.

Note: You should not use the delete operator on predefined JavaScript object properties.


 */