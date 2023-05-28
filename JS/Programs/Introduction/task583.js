// JavaScript: Difference between two dates in days


/**
 * 


JavaScript Datetime: Exercise-8 with Solution
Write a JavaScript function to get the difference between two dates in days.

Test Data:
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216
-28







HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript difference between two dates in days</title>
</head>
<body>
</body>
</html>




JavaScript Code:

var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));




Live Demo:


html:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript difference between two dates in days</title>
</head>
<body>
</body>
</html>




js:


var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));









 */