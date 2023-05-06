// JavaScript: Remove duplicate items from an array, ignore case sensitivity




/**
 * 
 * 
 * JavaScript Array: Exercise-14 with Solution
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).





Sample Solution-1:

JavaScript Code:

function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);








Sample Solution-2:

Removing duplicates from an array in JavaScript can be done in a variety of ways, such as using Array.prototype.reduce(), Array.prototype.filter() or even a simple for loop. But there's an easier alternative. JavaScript's built-in Set object is described as a collection of values, where each value may occur only once. A Set object is also iterable, making it easily convertible to an array using the spread (...) operator.

JavaScript Code:

//Source:https://bit.ly/3hEZdCl
//Remove duplicates from a JavaScript array
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
console.log([...new Set(nums)])







Live Demo:



function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);








 */