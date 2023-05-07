// JavaScript: Find the leap years from a given range of years

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-16 with Solution
Find the leap years in a given range of years.





HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Find Leap years in a range</title>
</head>
<body>
</body>
</html>








JavaScript Code:

function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        var new_array = [];

  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2012));






ES6 Version:

function leap_year_range(st_year, end_year) {
        const year_range = [];
        for (let i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        const new_array = [];

  year_range.forEach(
   year => { 
      if (test_LeapYear(year)) 
      new_array.push(year);
   });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2012));


 */