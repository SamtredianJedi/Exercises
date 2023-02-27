// Replace all Instances of a Character in a String





/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will replace all instances of a character in a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Regex
JavaScript String split()
Javascript Array join()
Example 1: Replace All Instances Of a Character Using Regex
// program to replace all instances of a character in a string

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result);





In the above example, the RegEx is used with the replace() method to replace all the instances of a character in a string.

/g represents that the operation is carried out for all in instances of the string.

Example 2: Replace All Instances Of Character Using Built-in Methods
// program to replace all instances of character in a string

const string = 'Learning JavaScript Program';

const splitString = string.split('a');

const result = splitString.join('A');

console.log(result);




In the above example, the built-in methods are used to replace all the occurrences of a character in a string.

The split('a') method splits the string into an array.

["Le", "rning J", "v", "Script Progr", "m"]
The join('A') method joins all the array elements into a string by adding A between each array element.

LeArning JAvAScript ProgrAm



 */