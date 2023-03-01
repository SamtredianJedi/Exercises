// Check if a Number is Float or Integer

/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a number is a float or an integer value.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Regex
JavaScript Number.isInteger()
JavaScript typeof Operator
Example 1: Using Number.isInteger()
// program to check if a number is a float or integer value

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);





In the above program, the passed value is checked if it is an integer value or a float value.

The typeof operator is used to check the data type of the passed value.
The isNaN() method checks if the passed value is a number.
The Number.isInteger() method is used to check if the number is an integer value.
Example 2: Using Regex
// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);




In the above example, the regex pattern is used to check if the passed argument is an integer value or float value.

The pattern /^-?[0-9]+$/ looks for the integer value.

The test() method of the RegExp object is used to test the pattern with the given value.

Note: The above program only works for numbers.


 */