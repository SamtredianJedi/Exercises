// Check Whether a String Starts and Ends With Certain Characters





/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program to check whether a string starts and ends with certain characters.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String startsWith()
Javascript String endsWith()
JavaScript Regex
Example 1: Check String Using Built-in Methods




// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string = prompt('Enter a string: ');
checkString(string);




In the above program, the two methods startsWith() and endsWith() are used.

The startsWith() method checks if the string starts with the particular string.
The endsWith() method checks if the string ends with the particular string.
The above program does not check for lowercase letters. Hence, here G and g are different.

You could also check if the above character starts with S or s and ends with G or g.

str.startsWith('S') || str.startsWith('s') && str.endsWith('G') || str.endsWith('g');
Example 2: Check The String Using Regex




// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}




In the above program, a regular expression (RegEx) is used with the test() method to check if the string starts with S and ends with G.

The /^S/i pattern checks if the string is S or s. Here, i denotes that the string is case-insensitive. Hence, S and s are considered the same.
The /G$/i patterns checks if the string is G or g.
The if...else...if statement is used to check the conditions and display the outcome accordingly.
The for loop is used to take different inputs from the user to show different cases.


 */