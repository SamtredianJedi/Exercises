// JavaScript: Clone an array

/**
 * 
 * 
 * 
 * 
 JavaScript Array: Exercise-2 with Solution
Write a JavaScript function to clone an array.

Test Data:
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]






Sample Solution-1:

JavaScript Code:

var array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



 */