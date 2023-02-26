// Check if a String Starts With Another String





/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a string starts with another string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String startsWith()
JavaScript String lastIndexOf()
JavaScript Regex
Example 1: Using startsWith()
// program to check if a string starts with another string

const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}





In the above program, the startsWith() method is used to determine if the string starts with 'he'. The startsWith() method checks if the string starts with the particular string.

The if...else statement is used to check the condition.

Example 2: Using lastIndexOf()
// program to check if a string starts with another string

const string = 'hello world';

const toCheckString = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}




In the above program, the lastIndexOf() method is used to check if a string starts with another string.

The lastIndexOf() method returns the index of the searched string (here searching from the first index).

Example 3: Using RegEx
// program to check if a string starts with another string

const string = 'hello world';

const pattern = /^he/;

let result = pattern.test(string);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}




In the above program, the string is checked using the RegEx pattern and the test() method.

/^ indicates the starting of the string.


 */