// Compare Two Strings

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program to compare two strings using various methods.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String toUpperCase()
JavaScript Regex
Javascript String localeCompare()
Example 1: Using toUpperCase()
// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}




In the above program, two strings are compared. Here,

The toUpperCase() method converts all the string characters to uppercase.
=== is used to check if both the strings are the same.
The if...else statement is used to display the result as per the condition.
Note: You can also use the toLowerCase() method to convert all the strings to lowercase and perform the comparison.

Example 2: JS String Comparison Using RegEx
// program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}




In the above program, the RegEx is used with the test() method to perform case insensitive string comparison.

In the RegEx pattern,  "g" syntax denotes global and "gi" syntax denotes case insensitive comparisons.

Example 3: Using localeCompare()
// program to perform case insensitive string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}





In the above program, the localeCompare() method is used to perform case insensitive string comparison.

The localeCompare() method returns a number that indicates whether a reference string comes before, or after, or is the same as the given string.

Here, { sensitivity: 'base' } treats A and a as the same.


 */