// Replace All Occurrences of a String

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will replace all occurrences of a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Regex
Example 1: Replace All Occurrence of String Using RegEx
// program to replace all occurrence of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);





In the above program, a regex expression is used as the first parameter inside the replace() method.

/g refers to global (that replacement is done across the whole string) and /i refers to case-insensitive.

The replace() method takes the string that you want to replace as the first parameter and the string you want to replace with as the second parameter.

Example 2: Replace All Occurrence of String Using built-in Method
// program to replace all occurrence of a string

const string = 'Mr red has a red house and a red car';

const result = string.split('red').join('blue');

console.log(result);




In the above program, the built-in split() and join() method is used to replace all the occurrences of the string.

The string is split into individual array elements using the split() method.
Here, string.split('red') gives ["Mr ", " has a ", " house and a ", " car"] by splitting the string.
The array elements are joined into a single string using the join() method.
Here, reverseArray.join('blue') gives Mr blue has a blue house and a blue car by joining the array elements.


 */