// JavaScript: Find out the last day of a month


/**
 * 
 * 
 * 
 * JavaScript Datetime: Exercise-9 with Solution
Write a JavaScript function to get the last day of a month.

Test Data:
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Find out the last day of a month</title>
</head>
<body>
</body>
</html>







JavaScript Code:

var lastday = function(y,m){
return  new Date(y, m +1, 0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));





Live Demo:


html:




<head>
<meta charset="utf-8">
<title>Find out the last day of a month</title>
</head>
<body>
</body>


js:





var lastday = function(y,m){
return  new Date(y, m +1, 0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));



 */