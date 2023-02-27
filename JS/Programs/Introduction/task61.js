// Check Leap Year




/**
 * 
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will check if a year is leap year or not.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Date and Time
JavaScript if...else Statement
A year is a leap year if the following conditions are satisfied:

The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100.
Example 1: Check Leap Year Using if...else
// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);





In the above program, the three conditions are checked to determine if the year is a leap year or not.

The % operator returns the remainder of the division.

Example 2: Check Leap Year Using newDate()
// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);



In the above program, the month of February is checked if it contains 29 days.

If a month of February contains 29 days, it will be a leap year.

The new Date(2000, 1, 29) gives the date and time according to the specified arguments.

Tue Feb 29 2000 00:00:00 GMT+0545 (+0545)
The getDate() method returns the day of the month.


 */