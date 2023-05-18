// JavaScript: Creates an object from an array, using the specified key and excluding it from each value


/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-44 with Solution
Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

Use Array.prototype.reduce() to create an object from arr.
Use object destructuring to get the value of the given key and the associated data and add the key-value pair to the object.







JavaScript Code :

//Source:https://bit.ly/3hEZdCl
//Add the key-value pair to the object.
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});
 
console.log(indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], x => x.id));



 */