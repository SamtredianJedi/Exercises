// Create Multiline Strings


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will create multiline strings.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Template Literals (Template Strings)
Example 1: Create Multiline Strings Using +
// program to create a multiline strings

// using the + operator
const message = 'This is a long message\n' + 
    'that spans across multiple lines\n' + 
    'in the code.'

console.log(message);




In the above example, a multiline string is created using the + operator and \n.

The escape character \n is used to break the line.

Example 2: Create Multiline Strings Using \
// program to create a multiline strings

// using the \ operator
const message = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message);



Example 3: Create Multiline Strings Using Template Literal
// program to create a multiline strings

// using the template literal

const message = `This is a long message
that spans across multiple lines
in the code.`

console.log(message);




In the above example, the template literal ` ` is used to write multiline strings.

The template literal was introduced in the newer version of JavaScript (ES6).

Some browsers may not support the use of template literals. To learn more, visit JavaScript Template Literal Support.


 */