// Generate Random String

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will generate strings of any size by picking characters randomly from A-Z, a-z, and 0-9.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Math random()
Example 1: Generate Random Strings
// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));



In the above example, the Math.random() method is used to generate random characters from the specified characters (A-Z, a-z, 0-9).

The for loop is used to loop through the number passed into the generateString() function. During each iteration, a random character is generated.

Example 2: Generate Random Strings Using Built-in Methods
// program to generate random strings

const result = Math.random().toString(36).substring(2,7);
console.log(result);




In the above example, built-in methods are used to generate random characters.

The Math.random() method generates the random number between 0 and 1.

In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.

The substring(2, 7) method returns five characters.

Note: In the above examples, the output varies each time because random characters are generated at every execution.


 * 
 * 
 *  */