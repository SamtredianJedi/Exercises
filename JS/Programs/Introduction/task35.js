// Reverse a String





/**
 * 
 * 
 * 
 * In this tutorial, you will learn to write a JavaScript program that reverses a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Function and Function Expressions
Example 1: Reverse a String Using for Loop



// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);




In the above program, the user is prompted to enter a string. That string is passed to the reverseString() function.

Inside the reverseString() function,

An empty newString variable is created.
The for loop is used to iterate over the strings. During the first iteration, str.length - 1 gives the position of the last element. That element is added to the newString variable.
This process continues for all the string elements.
The value of i decreases in each iteration and continues until it becomes 0.
Example 2: Reverse a String Using built-in Methods




// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);



In the above program, the built-in methods are used to reverse a string.

First, the string is split into individual array elements using the split() method. str.split("") gives ["h", "e", "l", "l", "o"].
The string elements are reversed using the reverse() method. arrayStrings.reverse() gives ["o", "l", "l", "e", "h"].
The reversed string elements are joined into a single string using the join() method. reverseArray.join("") gives olleh.


 */