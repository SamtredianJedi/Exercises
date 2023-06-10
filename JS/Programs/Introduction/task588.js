// JavaScript: Return the number of minutes in hours and minutes

/**
 * 
 * 
 * 
 * JavaScript Datetime: Exercise-13 with Solution
Write a JavaScript function that returns the number of minutes in hours and minutes.

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."






HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Return the number of minutes in hours and minutes.</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));




Live Demo:



html:




<head>
  <meta charset="utf-8">
  <title>Return the number of minutes in hours and minutes.</title>
</head>
<body>
​
</body>



js:




function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
​
console.log(timeConvert(200));


 */