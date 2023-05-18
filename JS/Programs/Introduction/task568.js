// JavaScript: Permutations of an array elements


/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-46 with Solution
Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

Use recursion.
For each element in the given array, create all the partial permutations for the rest of its elements.
Use Array.prototype.map() to combine the element with each partial permutation, then Array.prototype.reduce() to combine all permutations in one array.
Base cases are for Array.prototype.length equal to 2 or 1.
WARNING: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries may cause your browser to hang as it tries to solve all the different combinations.



 */