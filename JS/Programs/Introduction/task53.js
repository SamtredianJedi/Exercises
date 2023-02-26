// Trim a String


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will trim a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript String trim()
JavaScript Regex
Example 1: Trim a String
// program to trim a string

const string = '      Hello World       ';

const result = string.trim();

console.log(result);





In the above example, the trim() method is used to trim a string.

The trim() method removes white space from both sides of the string.

Example 2: Trim a String Using RegEx
// program to trim a string

function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result = trimString('    Hello world    ');
console.log(result);




In the above program, the RegEx is used with the replace() method to trim the string.

/^\s+|\s+$/g checks for whitespace at the beginning and end of the string.


 */