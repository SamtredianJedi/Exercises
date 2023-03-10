// JavaScript: Tips of the Day 4 



/**
 * 
 * 
 * const join = (array, separator = ',', end = separator) =>
  array.reduce(
    (acc, val, i) =>
      i === array.length - 2
        ? acc + val + end
        : i === array.length - 1
        ? acc + val
        : acc + val + separator,
    ''
  );

console.log(join(['red', 'yellow', 'green', 'red'], ',', '&'));
console.log(join(['red', 'yellow', 'green', 'red'], ','));
console.log(join(['red', 'yellow', 'green', 'red']));


 */