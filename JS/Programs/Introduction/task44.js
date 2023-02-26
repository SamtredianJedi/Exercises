// Loop Through an Object






/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will loop through an object.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript for...in loop
Example 1: Loop Through Object Using for...in



// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value); 
} 




In the above example, the for...in loop is used to loop through the student object.

The value of each key is accessed by using student[key].

Note: The for...in loop will also count inherited properties.

For example,

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

const person = {
    gender: 'male'
}

// inheriting property
student.__proto__ = person;

for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value);
} 




If you want, you can only loop through the object's own property by using the hasOwnProperty() method.

if (student.hasOwnProperty(key)) {
    ++count:
}
Example 2: Loop Through Object Using Object.entries and for...of




// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
    console.log(key + " - " +  value);
}



In the above program, the object is looped using the Object.entries() method and the for...of loop.

The Object.entries() method returns an array of a given object's key/value pairs. The for...of loop is used to loop through an array.


 */