// Check the Number of Occurrences of a Character in the String





/**
 * 
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that checks the number of occurrences of a character in a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Regex
If you check the number of occurrences of 'o' in the string 'school', the result is 2.

Example 1: Check Occurrence of a Character Using for Loop




// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);




In the above example, the user is prompted to enter a string and the character to check.

In the beginning, the value of the count variable is 0.
The for loop is used to iterate over the strings.
The charAt() method returns a character at a specified index.
During each iteration, if the character at that index matches the required character to match, then the count variable is increased by 1.
Example 2: Check occurrence of a character using a Regex




// program to check the occurrence of a character

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);



In the above example, a regular expression (regex) is used to find the occurrence of a string.

const re = new RegExp(letter, 'g'); creates a regular expression.
The match() method returns an array containing all the matches. Here, str.match(re);gives ["o", "o"].
The length property gives the length of an array element.


 */