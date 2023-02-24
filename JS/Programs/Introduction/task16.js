// Print the Fibonacci Sequence






/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to program a Fibonacci sequence in JavaScript.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript for loop
JavaScript while and do...while Loop
A fibonacci sequence is written as:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...
The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

Example 1: Fibonacci Series Up to n Terms





// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}



In the above program, the user is prompted to enter the numbers of terms that they want in the Fibonacci series.

The for loop iterates up to the number entered by the user.

0 is printed at first. Then, in each iteration, the value of the second term is stored in variable n1 and the sum of two previous terms is stored in variable n2.

Example 2: Fibonacci Sequence Up to a Certain Number




// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}




In the above example, the user is prompted to enter a number up to which they want to print the Fibonacci series.

The first two terms 0 and 1 are displayed beforehand. Then, a while loop is used to iterate over the terms to find the Fibonacci series up to the number entered by the user.

 */