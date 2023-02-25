// Create Objects in Different Ways


/**
 * 
 * In this example, you will learn to create JavaScript objects in different ways.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript Constructor Function
You can create an object in three different ways:

Using object literal
By creating instance of Object directly
By using constructor function
Example 1: Using object literal

// program to create JavaScript object using object literal
const person = { 
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

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);




In this program, we have created an object named person.

You can create an object using an object literal. An object literal uses { } to create an object directly.

An object is created with a key:value pair.

You can also define functions, arrays and even objects inside of an object. You can access the value of the object using dot . notation.

The syntax for creating an object using instance of an object is:

const objectName = new Object();
Example 2: Create an Object using Instance of Object Directly




// program to create JavaScript object using instance of an object
const person = new Object ( { 
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
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);




Here, the new keyword is used with the Object() instance to create an object.

Example 3: Create an object using Constructor Function



// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);



In the above example, the Person() constructor function is used to create an object using the new keyword.

new Person() creates a new object.

 */