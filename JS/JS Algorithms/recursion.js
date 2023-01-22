/**
 * Recursion is a function that calls itself. A good example of a recursive function is one that is used to calculate the factorial of a number. The factorial of a number is the product of all the positive integers less than or equal to that number. So, the factorial of 5 would be 5 * 4 * 3 * 2 * 1, or 120. A recursive function to calculate the factorial of a number would look something like this:
 */

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(n);