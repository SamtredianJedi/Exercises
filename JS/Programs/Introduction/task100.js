// Remove All Whitespaces From a Text


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will remove all whitespaces from a text.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String split()
Javascript Array join()
JavaScript Regex
Example 1: Using split() and join()
// program to trim a string

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);



In the above program,

The split(' ') method is used to split the strings into individual array elements.
["", "", "", "", "", "", "Hello", "World", "", "", "", "", "", "", ""]
The join('') method merges the array into a string.
Example 2: Using Regular Expression
// program to trim a string

function trimString(x) {

    const result = x.replace(/\s/g,'');
    return result

}

const result = trimString('    Hello World    ');
console.log(result);





In the above program, the Regular Expression is used with the replace() method to remove all whitespaces from a text.

/\s/g checks for whitespace in the string.


 */