// JavaScript: Tips of the Day 6

/**
 * 
 * 
 * Deep flattens an array
 * 
 *
 * 
 * const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

console.log(deepFlatten([2, [4], [[6], 8], 10]));


 */