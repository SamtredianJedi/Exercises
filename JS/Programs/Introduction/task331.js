// JavaScript: Test if a number is a power of 2

/**
 * 
 * 
 * JavaScript Math: Exercise-13 with Solution
Write a JavaScript function to test if a number is a power of 2.

Test Data:
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output:
true
false
true







Sample Solution-1:

JavaScript Code:

function power_of_2(n) {
 if (typeof n !== 'number') 
      return 'Not a number'; 

    return n && (n & (n - 1)) === 0;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));



 */