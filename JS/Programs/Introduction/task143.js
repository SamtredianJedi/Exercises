// JavaScript: Tips of the Day 3




/**
 * 
 * 
 * 
 * What is the difference between JavaScript's for...in, for...of and forEach?

Example:

for (let prop in ['x', 'y', 'z']) 
  console.log(prop);            // 0, 1, 2 (array indexes)

for (let prop in 'str') 
  console.log(prop);            // 0, 1, 2 (string indexes)

for (let prop in {x: 1, y: 2, z: 3}) 
  console.log(prop);            // x, y, z (object property names)

for (let prop in new Set(['x', 'y', 'x', 'p'])) 
  console.log(prop);            // undefined (no enumerable properties)



 */