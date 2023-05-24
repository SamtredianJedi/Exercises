// JavaScript: Comparison between two dates


/**
 * 



JavaScript Datetime: Exercise-5 with Solution
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

Test Data:
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"







JavaScript Code:

var compare_dates = function(date1,date2){
     if (date1>date2) return ("Date1 > Date2");
   else if (date1<date2) return ("Date2 > Date1");
   else return ("Date1 = Date2"); 
  }

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));








Sample Solution-2:

Checks if a date is the same as another date.

Use Date.prototype.toISOString() and strict equality checking (===) to check if the first date is the same as the second one.
JavaScript Code:

const is_same_date = (date1, date2) => date1.toISOString() === date2.toISOString();
console.log(is_same_date(new Date(2015, 12, 15), new Date(2015, 12, 15)));
console.log(is_same_date(new Date(2015, 12, 15), new Date(2015, 12, 16)));






Sample Solution-3:

Checks if a date is before another date.

Use the less than operator (<) to check if the first date comes before the second one.
JavaScript Code:

const is_before_date = (date1, date2) => date1 < date2;
console.log("Is 2018/8/15 before 2018/8/21?")
console.log(is_before_date(new Date(2018, 8, 15), new Date(2018, 8, 21)));
console.log("Is 2018/8/21 before 2018/8/15?")
console.log(is_before_date(new Date(2018, 8, 21), new Date(2018, 8, 15)));



 */