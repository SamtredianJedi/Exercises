// Convert the First Letter of a String into UpperCase






/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that converts the first letter of a string into uppercase.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String toUpperCase()
JavaScript Function and Function Expressions
Example 1: Convert First letter to UpperCase





// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);




In the above program, the user is prompted to enter a string and that string is passed into the capitalizeFirstLetter() function.

The string's first character is extracted using charAt() method. Here, str.charAt(0); gives j.
The toUpperCase() method converts the string to uppercase. Here, str.charAt(0).toUpperCase(); gives J.
The slice() method returns the rest of the string.
Here, str.slice(1); gives avaScript.
These two values are concatenated using the + operator.
Note: You can also extract the first character of a string using an array accessing property: str[0].

str.str[0]; // j
Example 2: Convert First letter to UpperCase using Regex




// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);




In the above program, the regular expression (regex) is used to convert the first letter of a string to uppercase.

The regex pattern is /^./ matches the first character of a string.
The toUpperCase() method converts the string to uppercase.


 */