// JavaScript: Tips of the Day 5



/**
 * 
 * 
 * 
 * 
 * 
 * const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;

console.log(size([1, 2, 3, 4, 5]));
console.log(size('size'));
console.log(size({ one: 1, two: 2, three: 3 }));



 */