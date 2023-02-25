// Find ASCII Value of Character



/**
 * 
 * In this example, you will learn to write a JavaScript program that finds the ASCII value of a character.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String charCodeAt()
JavaScript String codePointAt()
ASCII stands for American Standard Code for Information Interchange.

ASCII is a numeric value that is given to different characters and symbols for computers to store and manipulate. For example, the ASCII value of the letter 'A' is 65.

Resource: ASCII chart of all 127 characters in JavaScript.

Example 1: ASCII Value of Character Using charCodeAt()



// program to find the ASCII value of a character

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);



In the above program, the charCodeAt() method is used to find the ASCII value of a character.

The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.

If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives NaN.

Example 2: ASCII Value of Character Using codePointAt()



// program to find the ASCII value of a character

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.codePointAt(0);

console.log(`The ASCII value is: ${result}`);



In the above program, the codePointAt() method is used to find the ASCII value of a character.

The codePointAt() method returns a Unicode code point value.

In the above program, the user inputs three-character string abc. However, the index 0 is passed to the codePointAt() method. This gives the ASCII value of the first character (here a).

If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives undefined.


 */