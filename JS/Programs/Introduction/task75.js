// Sort Array of Objects by Property Values

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will sort an array of objects by property values.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array sort()
JavaScript Arrays
JavaScript Objects
Example 1: Sort Array by Property Name




// program to sort array by property name

function compareName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log(students.sort(compareName));



In the above program, the sort() method is used to sort an array by the name property of its object elements.

The sort() method sorts its elements according to the values returned by a custom sort function (compareName in this case).

Here,

The property names are changed to uppercase using the toUpperCase() method.
If comparing two names results in 1, then their order is changed.
If comparing two names results in -1 or 0, then their order is left as is.
Example 2: Sort Array by Property Age



// program to sort array by property name

function compareAge(a, b) {

    return a.age - b.age;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

console.log(students.sort(compareAge));



In the above program, the sort() method is used to sort an array element by the age property.

To compare the age property of two objects, we can simply subtract them.

If their difference is a negative value, their order is changed.
If their difference is a positive value, the order is left as is.


 */