// Format the Date


/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will format a date.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript if...else Statement
JavaScript Date and Time
Example 1: Format The Date




// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);



In the above example,

1. The new Date() object gives the current date and time.

let currentDate = new Date();
console.log(currentDate);
// Output
// Wed Aug 26 2020 10:45:25 GMT+0545 (+0545)
2. The getDate() method returns the day from the specified date.

let day = currentDate.getDate();
console.log(day); // 26
3. The getMonth() method returns the month from the specified date.

let month = currentDate.getMonth() + 1;
console.log(month); // 8
4. 1 is added to the getMonth() method because month starts from 0. Hence, January is 0, February is 1, and so on.

5. The getFullYear() returns the year from the specified date.

let year = currentDate.getFullYear();
console.log(year); // 2020
Then you can display the date in different formats.


 */