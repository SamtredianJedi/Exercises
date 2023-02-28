// Check If A Variable Is undefined or null


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a variable is undefined or null.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript null and undefined
JavaScript typeof Operator
JavaScript Function and Function Expressions
Example 1: Check undefined or null
// program to check if a variable is undefined or null

function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);





In the above program, a variable is checked if it is equivalent to null. The null with == checks for both null and undefined values. This is because null == undefined evaluates to true.

The following code:

if(variable == null) { ... }
is equivalent to

if (variable === undefined || variable === null) { ... }
Example 2: using typeof
// program to check if a variable is undefined or null

function checkVariable(variable) {

    if( typeof variable === 'undefined' || variable === null ) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);




The typeof operator for undefined value returns undefined. Hence, you can check the undefined value using typeof operator. Also, null values are checked using the === operator.

Note: We cannot use the typeof operator for null as it returns object.


 */