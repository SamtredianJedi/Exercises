// Check If a Variable is of Function Type

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a variable is of function type.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript typeof Operator
Javascript Function call()
JavaScript Object.toString()
Example 1: Using instanceof Operator
// program to check if a variable is of function type

function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);




In the above program, the instanceof operator is used to check the type of variable.

Example 2: Using typeof Operator
// program to check if a variable is of function type

function testVariable(variable) {
      
    if(typeof variable === 'function') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);




In the above program, the typeof operator is used with strict equal to === operator to check the type of variable.

The typeof operator gives the variable data type. === checks if the variable is equal in terms of value as well as the data type.

Example 3: Using Object.prototype.toString.call() Method
// program to check if a variable is of function type

function testVariable(variable) {
      
    if(Object.prototype.toString.call(variable) == '[object Function]') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);




The Object.prototype.toString.call() method returns a string that specifies the object type.


 */