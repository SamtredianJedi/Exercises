// JavaScript: Get the month name from a particular date


/**
 * 
 * 
 * JavaScript Datetime: Exercise-4 with Solution
Write a JavaScript function to get the month name from a particular date.

Test Data:
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"





HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get the month name from a particular date</title>
</head>
<body>
</body>
</html>






JavaScript Code:

var month_name = function(dt){
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));



 */