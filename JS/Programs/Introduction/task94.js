// Perform Function Overloading




/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will perform function overloading.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript if...else Statement
JavaScript switch Statement
JavaScript Function and Function Expressions
In programming, function overloading refers to the concept where multiple functions with the same names can have different implementations. However, in JavaScript, if there are multiple functions with the same name, the function that is defined at the last gets executed.

The function overloading feature can be implemented in some other ways.

Example 1: Using if/else-if Statement




// program to perform function overloading

function sum() {  
    
    // if no argument        
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }

    // if only one argument 
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }

    // multiple arguments
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); 




In the above program, the overloading feature is accomplished by using the if/else...if statement.

In JavaScript, the arguments object is automatically available inside a function that represents the passed arguments to a function.
The multiple conditions are addressed to perform actions based on that particular condition.




Example 2: Using switch Statement
// program to perform function overloading
function sum() {
    switch (arguments.length) {
    case 0:
        console.log('You have not passed any argument');
        break;
    case 1:
        console.log('Pass at least two arguments');
        break;
    default:
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result);
        break;
    }
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);




In the above program, the switch statement is used to accomplish the function overloading functionality. Different conditions result in different actions to be performed.


 */