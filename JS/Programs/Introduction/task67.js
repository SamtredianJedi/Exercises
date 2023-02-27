// Check if An Array Contains a Specified Value

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if an array contains a specified value.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array includes()
JavaScript Array indexOf()
JavaScript Arrays
Example 1: Check Array Using includes()
// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}





In the above program, the includes() method is used to check if an array contains a specified value.

The includes() method returns true if the value exists in the array.
The if...else statement is used to display the result as per the condition.
Example 2: Check Array Using indexOf()
// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.indexOf('javascript') !== -1;

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}




In the above program, the indexOf() method is used with the if...else statement to check if an array contains a specified value.

The indexOf() method searches an array and returns the position of the first occurrence. If the value cannot be found, it returns -1.

Note: Both includes() and indexOf() are case sensitive. Hence, J and j are different.


 */