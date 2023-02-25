// Check if a Key Exists in an Object






/**
 * 
 * In this example, you will learn to write a JavaScript program that checks if a key exists in an object.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Objects
JavaScript Object hasOwnProperty()
Example 1: Check if Key Exists in Object Using in Operator



// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}



In the above program, the in operator is used to check if a key exists in an object. The in operator returns true if the specified key is in the object, otherwise it returns false.

Example 2: Check if Key Exists in Object Using hasOwnProperty()




// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}

//check if key exists
const hasKey = person.hasOwnProperty('name');

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}



In the above program, the hasOwnProperty() method is used to check if a key exists in an object. The hasOwnProperty() method returns true if the specified key is in the object, otherwise it returns false.


 */