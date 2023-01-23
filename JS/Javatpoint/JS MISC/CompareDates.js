/**
 * 
 * Javascript Compare dates
In the previous section, we discussed the date methods as well as the constructors.

Here, with the help of those methods, we will learn to compare dates.

Basically, there are different ways by which we can compare dates, such as:

Comparing two dates with one another.
Comparing date with time.
Comparing dates using getTime()
Comparing two dates with one another
Example:

<html>  
<head> Comparing Dates</br></head>  
<body>  
<script>  
function compare()  
{  
var d1=new Date('2020-01-23'); //yyyy-mm-dd  
var d2=new Date('2020-01-21'); //yyyy-mm-dd  
if(d1>d2)  
{  
document.write("True, First date is greater than second date");  
}  
else if(d1<d2)  
{  
document.write("False, Second date is smaller than the first");  
}  
else  
{  
document.write("Both date are same and equal");  
}  
}  
compare(); //invoking compare()  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Comparing date with time
Example 1: Comparing different dates with different timings

<html>  
<head> Comparing Date and time</br></head>  
<body>  
<script>  
var d1=new Date("Apr 17, 2019 12:10:10"); //mm dd, yyyy hh:mm:ss  
var d2=new Date("Dec 1, 2019 12:10:30"); //mm dd, yyyy hh:mm:ss  
if(d1>d2)  
{  
document.write("False, d1 date and time is smaller than d2 date and time");  
}  
else if(d1<d2)  
{  
document.write("True, d2 is greater in terms of both time and date");  
}  
else  
{  
document.write("Both date and time are same and equal");  
}  
</script>  
</body>  
</html>  
 */


/**
 * 
 * Example2: Comparing same dates with disimilar timings

<html>  
<head> Comparing same date but different time</br></head>  
<body>  
<script>  
var d1=new Date("2018-01-10, 12:10:10"); //yyyy-mm-dd hh:mm:ss  
var d2=new Date("2018-01-10, 12:10:50"); //yyyy-mm-dd hh:mm:ss  
if(d1>d2)  
{  
document.write("False, d1 & d2 dates are same but d2 time is greater than d1 time");  
}  
else if(d1<d2)  
{  
document.write("True, d2 time is greater than d1 time.");  
}  
else  
{  
document.write("Both date and time are same and equal");  
}  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Comparing date with getTime()
A better approach to make comparison between dates is to use getTime() function. This function lets converting date into numeric value to directly compare them.

Example1: Comparing current date and time with a given date and time.

<html>  
<head> Comparing Dates</br></head>  
<body>  
<script>  
var d1=new Date("2019-10-10, 10:10:10"); //yyyy-mm-dd hh:mm:ss  
var currentdate=new Date(); //fetch the current date value  
if(d1.getTime()<currentdate.getTime())  
{  
document.write("True, currentdate and time are greater than d1");  
}  
else if(d1.getTime()>currentdate.getTime())  
{  
document.write("False");  
}  
else  
{  
document.write("True, equal");  
}  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example2: Comparing two different dates with different timings.

<html>  
<head> Comparing Dates</br></head>  
<body>  
<script>  
var d1=new Date("2019-10-10, 10:10:10");  
var d2=new Date("2019-11-02, 14:19:05");  
if(d1.getTime()<d2.getTime())  
{  
document.write("True, d1 date and time are smaller than d2 date and time");  
}  
else if(d1.getTime()>d2.getTime())  
{  
document.write("False, d2 date and time are greater than d1");  
}  
else  
{  
document.write("True, d1 and d2 have same time and date");  
}  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Changing Date Format
We can also change or set the format through JavaScript code. The function getFullYear(), GetMonth(), and getDate() allows to set the format of date accordingly.

Example1: Changing the date format to 'yyyy-mm-dd'.

<html>  
<head> <h3>Changing date format</h3></br></head>  
<body>  
<script>  
var current_date=new Date(); //fetches current date  
var set_to=current_date.getFullYear()+"-"+(current_date.getMonth()+1)+"-"+current_date.getDate();  
document.write("The format followed is yyyy-dd-mm:  "+set_to);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * We can also set the date and time format according to our need.

Example2: Changing the datetime format to 'yyyy-dd-mm hh:mm:ss'.

<html>  
<head> <h3>Changing date format</h3></br></head>  
<body>  
<script>  
var current_datetime=new Date(); //fetches current date and time  
var set_to=current_datetime.getFullYear()+"-"+(current_datetime.getMonth()+1)+"-"+current_datetime.getDate()+"  "+current_datetime.getHours()+":"+current_datetime.getMinutes()+":"+current_datetime.getSeconds();  
document.write("The format followed is yyyy-dd-mm hh:mm:ss :  "+set_to);  
</script>  
</body>  
</html>  
 */