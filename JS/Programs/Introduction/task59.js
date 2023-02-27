// Replace All Line Breaks with <br></br>




/**
 * 
 * 
 * 
 * In this example, you will learn to write JavaScript program that will replace all line breaks in a string with the <br> tag.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript String replace()
JavaScript String split()
Javascript Array join()
Example 1: Replace All Line Breaks Using RegEx
// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result);



In the above example:

The RegEx is used with the replace() method to replace all the line breaks in string with <br>.
The pattern /(\r\n|\r|\n)/ checks for line breaks.
The pattern /g checks across all the string occurrences.
Example 2: Replace All Line Breaks Using Built-in Methods
// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.split('\n').join('<br>');

console.log(result);




In the above example, the built-in methods are used to replace all line breaks with <br>.

The split('\n') splits the string into array elements by splitting on a line break.

["I am Learning JavaScript.", "JavaScript is fun.", "JavaScript is easy."]
The join('<br>') method joins the array by adding <br> between array elements.

I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.


 */