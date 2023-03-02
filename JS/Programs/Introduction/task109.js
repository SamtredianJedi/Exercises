// JavaScript: Find 1st January be a Sunday between a range of years





/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-7 with Solution
Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>A Program to find 1st January is being a Sunday between 2014 and 2050.</title>
</head>
<body>
</body>
</html>

JavaScript Code:

console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');

Sample Output:

--------------------
1st January is being a Sunday  2017
1st January is being a Sunday  2023
1st January is being a Sunday  2034
1st January is being a Sunday  2040
1st January is being a Sunday  2045
--------------------
Explanation:

Declaring a JavaScript date : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. You can declare a date in the following ways :

new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.



ES6 Version:

console.log('--------------------');
for (let year = 2014; year <= 2050; year++)
    {
    const d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`);
    }
console.log('--------------------');



Live Demo:




console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');





 */