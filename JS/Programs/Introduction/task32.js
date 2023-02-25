// Check Whether a String is Palindrome or Not




/**
 * 
 * In this example, you will learn to write a JavaScript program that checks if the string is palindrome or not.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Function and Function Expressions
A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

Example 1: Check Palindrome Using for Loop



// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);



In the above program, the checkPalindrome() function takes input from the user.

The length of the string is calculated using the length property.
The for loop is used to iterate up to the half of the string. The if condition is used to check if the first and the corresponding last characters are the same. This loop continues till the half of the string.
During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not considered a palindrome.
Example 2: Check Palindrome using built-in Functions



// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);




In the above program, the palindrome is checked using the built-in methods available in JavaScript.

The split('') method converts the string into individual array characters.
const arrayValues = string.split(''); // ["h", "e", "l", "l", "o"]
The reverse() method reverses the position in an array.
// ["o", "l", "l", "e", "h"]
const reverseArrayValues = arrayValues.reverse();
The join('') method joins all the elements of an array into a string.
const reverseString = reverseArrayValues.join(''); // "olleh"
Then the if...else statement is used to check if the string and the reversed string are equal. If they are equal, the string is a palindrome.
Note: The multiple lines of code can be reduced and written in one line:

const reverseString = string.split('').reverse().join('');


 */