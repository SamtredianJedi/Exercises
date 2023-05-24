// JavaScript: Add minutes to a Date object

/**
 * 
 * 
 * JavaScript Datetime: Exercise-6 with Solution
Write a JavaScript function to add specified minutes to a Date object.

Test Data:
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"







HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Add minutes to a date object.</title>
</head>
<body>
</body>
</html> 







JavaScript Code:

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2014,10,2), 30).toString());








Live Demo:


html:




<head>
<meta charset="utf-8">
<title>Add minutes to a date object.</title>
</head>
<body>
</body>


js:




var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2014,10,2), 30).toString());


 */