// Clone a JS Object







/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a program that clones an object.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript Object.assign()
A JavaScript object is a complex data type that can contain various data types. For example,

const person = {
    name: 'John',
    age: 21,
}
Here, person is an object. Now, you can't clone an object by doing something like this.

const copy = person;
console.log(copy); // {name: "John", age: 21}
In the above program, the copy variable has the same value as the person object. However, if you change the value of the copy object, the value in the person object will also change. For example,

copy.name = 'Peter';
console.log(copy.name); // Peter
console.log(person.name); // Peter
The change is seen in both objects because objects are reference types. And both <code>copy</code> and <code>person</code> are pointing to the same object.

Example 1. Clone the Object Using Object.assign()





// program to clone the object

// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);




The Object.assign() method is part of the ES6 standard. The Object.assign() method performs deep copy and copies all the properties from one or more objects.

Note: The empty {} as the first argument ensures that you don't change the original object.

Example 2: Clone the Object Using Spread Syntax





// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);




The spread syntax ... was introduced in the later version(ES6).

The spread syntax can be used to make a shallow copy of an object. This means it will copy the object. However, the deeper objects are referenced. For example,





const person = {
    name: 'John',
    age: 21,

    // the inner objects will change in the shallow copy
    marks: { math: 66, english: 73}
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

// changing the value of clonePerson
clonePerson.marks.math = 100;

console.log(clonePerson.marks.math); // 100
console.log(person.marks.math); // 100




Here, when the inner object value math is changed to 100 of clonePerson object, the value of the math key of the person object also changes.

Example 3: Clone the Object Using JSON.parse()





// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);




In the above program, the JSON.parse() method is used to clone an object.

Note: JSON.parse() only works with Number and String object literal. It does not work with an object literal with function or symbol properties.


 */