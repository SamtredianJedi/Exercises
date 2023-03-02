// JavaScript Basic : Exercise-3 with Solution

/**
 * 
 * 
 * 
 * Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

Sample Solution: -

HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Write a JavaScript program to get the current date.</title>
  </head>
  <body>
  </body>
  </html>
  

  
JavaScript Code:

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

Sample Output:

01-09-2018
01/09/2018
09-01-2018
09/01/2018
Explanation:

Declaring a JavaScript date : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. You can declare a date in the following ways :

new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
The getDate() method is used to get the day of the month for the specified date according to local time. The value returned by getDate() is an integer between 1 and 31.

The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). The value returned by getMonth() is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.

The getFullYear() method is used to get the year of the specified date according to local time. The value returned by the method is an absolute number. For dates between the years 1000 and 9999, getFullYear() returns a four-digit number, for example, 1985.





ES6 Version:

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);
Live Demo:





var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);



 */