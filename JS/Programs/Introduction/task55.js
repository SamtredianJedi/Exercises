// Check Whether a String Contains a Substring

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a string contains a substring.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String includes()
JavaScript String indexOf()
Example 1: Check String with includes()
// program to check if a string contains a substring

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}




The includes() method is used with the if...else statement to check whether a string contains the characters of a specified string.

Note: The includes() method is case-sensitive. Hence, fun and Fun are different.

Example 2: Check String with indexOf()
// program to check if a string contains a substring

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.indexOf(checkString) !== -1) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}



In the above program, the indexOf() method is used with the if...else statement to check if a string contains a substring.

The indexOf() method searches a string and returns the position of the first occurrence. When a substring cannot be found, it returns -1.

Note: The indexOf() method is case sensitive.



 */