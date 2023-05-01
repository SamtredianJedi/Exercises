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







Sample Solution-2:

JavaScript provides quite a few ways to clone an array, most of which are pretty similar in terms of performance and results. Here's a quick rundown of some of the available options.

The spread operator:

ES6 introduced the spread operator (...), which provides probably the easiest and most common way to create a shallow clone of an array.






JavaScript Code:

let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = [...x];
console.log("Clone of the said array:")
console.log(y)







Sample Solution-3:

Array.from()

Array.from() has a very powerful API that can be used for many different things, including creating a copy of an array.

JavaScript Code:

let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = Array.from(x);
console.log("Clone of the said array:")
console.log(y)









Sample Solution-4:

Array.prototype.slice()

Similarly to the spread operator, Array.prototype.slice() can be used to create a shallow copy of an array.

JavaScript Code:

let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = x.slice();
console.log("Clone of the said array:")
console.log(y)









Sample Solution-5:

Array.prototype.map()

Looking into one of the more unorthodox options, Array.prototype.map() can be used to map each element of an array to itself to create a new array.

JavaScript Code:

let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = x.map(i => i);
console.log("Clone of the said array:")
console.log(y)







Sample Solution-6:

Array.prototype.filter()

Similarly, Array.prototype.filter() can be used to return true for each and every element, resulting in a new array with all of the original array's elements.

JavaScript Code:

let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = x.filter(() => true);
console.log("Clone of the said array:")
console.log(y)








Live Demo :


js:




array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



 */