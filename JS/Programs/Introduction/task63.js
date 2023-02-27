// Display Current Date





/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will display the current date.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Date and Time
Example : Display Current Date
// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);




In the above example, the new Date() constructor is used to create a date object. Then,

1. The new Date() gives the current date and time.

const date = new Date();
console.log(date);
// Sun Aug 23 2020 10:46:38 GMT+0545 (+0545)
2. The toDateString() method returns the date portion of a date object.

const n = date.toDateString();
console.log(n); // Wed Aug 26 2020
3. The toLocaleTimeString() method returns the time portion of a date object.

const time = date.toLocaleTimeString();
console.log(time); // 1:13:12 PM


 */