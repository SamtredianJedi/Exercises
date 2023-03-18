// JavaScript: Tips of the Day 8



/**
 * 
 * 
 * 
 * 
 * Returns a list of elements that exist in both arrays

Example:

const tips_intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};

console.log(tips_intersection([1, 2, 3, 5], [5, 4, 3, 2]));


 */