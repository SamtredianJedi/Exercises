// Replace Characters of a String

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that replaces a character of a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript String replace()
Example: Replace First Occurrence of a Character in a String



// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// replace the characters
const newText = string.replace('red', 'blue');

// display the result
console.log(newText);



In the above program, the replace() method is used to replace the specified string with another string.

When a string is passed in the replace() method, it replaces only the first instance of the string. So if there is a second match in the string, it won't be replaced.

You could also pass a regular expression (regex) inside the replace() method to replace the string.

Example 2: Replace Character of a String Using RegEx



// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);



In the above program, a regex expression is used as the first parameter inside the replace() method.

/g refers to global. It means that all the matching characters in the string are replaced.

Since JavaScript is case-sensitive, R and r are treated as different values.

You could also use the regex to perform case-insensitive replacement using /gi, where i represents case-insensitive.


 */