// Compare The Value of Two Dates


/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will compare the values of two dates.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Comparison and Logical Operators
JavaScript Date and Time
Example: Compare Value of Two Dates
// program to compare value of two dates
// create two dates
const d1 = new Date();
const d2 = new Date();

// comparisons
const compare1 = d1 < d2;
console.log(compare1);

const compare2 = d1 > d2;
console.log(compare2);

const compare3 = d1 <= d2;
console.log(compare3);

const compare4 = d1 >= d2;
console.log(compare4);

const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);

const compare6 = d1.getTime() !== d2.getTime();
console.log(compare6);




In the above example, the new Date() constructor is used to create a date object.

The new Date() gives the current date and time.

const d1 = new Date();
console.log(d1); // Fri Aug 28 2020 09:19:40 GMT+0545 (+0545)
You can then directly compare these two dates using comparison operators >, <, <=, or >=.

However, to use comparison operators like ==, !=, ===, or !==, you have to use date.getTime().

The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.

const d1 = new Date().getTime();
console.log(d1); // 1598585951699



 */