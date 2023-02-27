// Display Date and Time




/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will display date and time.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Date and Time
Example : Display Date and Time
// program to display the date and time
// get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);




In the above example, the new Date() constructor is used to create a date object. It gives the date and time according to the given arguments:

const date = new Date(2017, 2, 12, 9, 25, 30);
console.log(date); // Sun Mar 12 2017 09:25:30 GMT+0545 (+0545)
Note: The six numbers in new Date() specify year, month, day, hour, minute, second respectively. Also, the month starts from 0. Hence, January is 0 and December is 11.

The toDateString() method returns the date portion of a Date object.

The toLocaleTimeString() method returns the time portion of a Date object.


 */