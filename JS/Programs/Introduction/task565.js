// JavaScript: Ungrouping the elements in an array produced by zip







/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-43 with Solution
Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

Use Math.max(), Function.prototype.apply() to get the longest subarray in the array, Array.prototype.map() to make each element an array.
Use Array.prototype.reduce() and Array.prototype.forEach() to map grouped values to individual arrays.








JavaScript Code :

//Source:https://bit.ly/3hEZdCl
//unzip
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));







Live Demo :


js:




//Source:https://bit.ly/3hEZdCl
//unzip
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));







 */