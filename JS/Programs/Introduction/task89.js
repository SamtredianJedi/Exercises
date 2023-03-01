// Validate An Email Address




/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will validate an email address.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Regex
JavaScript Function and Function Expressions
JavaScript if...else Statement
Example: Using Regex




// program to validate an email address

function validateEmail(email_id) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

validateEmail('abc123@gmail.com');
validateEmail('hello@com');




checks if an email address is valid or not.

The test() method returns true if there is a match in the string with the regex pattern.

The regular expression (regex) describes a sequence of characters used for defining a search pattern.

To learn more about the regex, visit JavaScript Regular Expression.


 */