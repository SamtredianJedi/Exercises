// JavaScript: Get the amount of days of a year

/**
 * 
 * 
 * 
 JavaScript Datetime: Exercise-14 with Solution
Write a JavaScript function to get the number of days in a year.

Test Data :
console.log(days_of_a_year(2015));
365
console.log(days_of_a_year(2016));
366






HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get the amount of days of a year</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));



 */