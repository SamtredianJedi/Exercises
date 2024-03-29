// JavaScript: Check whether a date is a weekend date




/**
 * 
 * 
 * 
 JavaScript Datetime: Exercise-7 with Solution
Write a JavaScript function to test whether a date is a weekend.

Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript Weekend test</title>
</head>
<body>
</body>
</html>






JavaScript Code:

var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));








Live Demo:


html:



<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript Weekend test</title>
</head>
<body>
</body>
</html>




js:



var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));





 */