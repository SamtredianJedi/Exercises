/**
 * 
 * Calculate days between two dates in JavaScript
Sometimes we need to calculate the number of days between two dates. This can be done using the JavaScript programming language. JavaScript provides a math function Math.floor() method to calculate the days between two dates. In JavaScript, we have to use the date object for any calculation to define the date using new Date().

To learn more about JavaScript in detail step by step follow our JavaScript tutorial.

We will calculate the number of days in two ways:

Calculate days by entering two dates
Calculate days from current dates
We will discuss both the methods in detail with examples. Along with that, we will calculate the days remaining in Christmas day from today (date will be taken from the system).

Find the number of days remaining in Christmas from the current date
AD
Approach 1: Calculate the days by entering two dates
This approach will help to calculate the days between two dates by providing two different dates in code. Follow the below step:

Define two date variables in JavaScript
Initialize them by creating the date objects using new Date()
After defining the dates, calculate the time difference between them by subtracting one date from another date using date2.getTime() - date1.getTime();
Now next step is to calculate the days between the dates. So, we will divide the time difference of both dates by the milliseconds in a day, i.e., 1000*60*60*24
At last, print the result calculated using the document.write() method.
Now, we will convert these steps into actual implementation. See the code below:

Copy Code

<html>  
   <head>  
      <title>Calculate days by entering two dates</title>  
   </head>  
   <body>  
      <script>  
         var date1, date2;  
         //define two date object variables with dates inside it  
         date1 = new Date("07/15/2015");  
         date2 = new Date("11/28/2016");  
  
         //calculate time difference  
         var time_difference = date2.getTime() - date1.getTime();  
  
         //calculate days difference by dividing total milliseconds in a day  
         var days_difference = time_difference / (1000 * 60 * 60 * 24);  
           
         document.write("Number of days between dates <br>" +   
                         date1 + " and <br>" + date2 + " are: <br>"   
                         + days_difference + " days");  
      </script>    
</body>  
</html>  
 */

/**
 * Calculate days using dynamic HTML form
It is a dynamic JavaScript example in which a user can provide the input by itself on web instead of providing the dates input in code by the programmer. The user will dynamically choose the dates from the calendar and enter the two dates in input field and calculate the number of days between two dates by clicking on a button. See the code below:

Copy Code

<html>   
<head>   
    <title> Calculate days between dates </title>   
      <script>  
       function daysDifference() {  
         //define two variables and fetch the input from HTML form  
         var dateI1 = document.getElementById("dateInput1").value;  
         var dateI2 = document.getElementById("dateInput2").value;  
  
        //define two date object variables to store the date values  
         var date1 = new Date(dateI1);  
         var date2 = new Date(dateI2);  
   
        //calculate time difference  
         var time_difference = date2.getTime() - date1.getTime();  
  
         //calculate days difference by dividing total milliseconds in a day  
         var result = time_difference / (1000 * 60 * 60 * 24);  
  
         return document.getElementById("result").innerHTML =    
              result + " days between both dates. ";  
                    }  
      </script>    
</head>    
<body>   
    
    <h2 style="color: 32A80F" align="Center">    
            Javatpoint : Calculate days between dates   
        <br> <br> </h2>   
    
        <p align="Center"> <b> Enter date1   </b>   
        <input type="date" id="dateInput1">   
        <br> <br>   
          
        <p align="Center"> <b> Enter date2   </b>   
        <input type="date" id="dateInput2">   
        <br> <br>       
    
        <button onclick="daysDifference()">   
          Calculate number of days   
        </button>   
    </p>   
    
    <h3 style="color:32A80F" id="result" align="center"></h3>   
    
</body>    
</html>  
 */

/**
 * 
 * Approach 2: Calculate the days from current date
In this approach, we will use the math function Math.floor() to calculate the days. Follow the below step:

Define two date variables, i.e., date1 and date2
Initialize the date1 variables by creating the date objects using new Date(), which will take system date by default.
Initialize the date2 variables by creating the date objects using new Date() and provide a date in it.
Now use the Math.abs() method to calculate the total seconds between two dates. So, divide the difference of dates by the milliseconds in one second Math.abs(date2-date1) / 1000;
Now next step is to calculate the number of days using the Math.floor() method. So, divide the calculated result from previous steps (total seconds between two dates) by 60*60*24
At last, print the result calculated using the document.write() method.
Now, we will convert these steps into actual implementation. See the code below:

Copy Code

<html>  
   <head>  
      <title>Calculate days between the dates using default system dates</title>  
   </head>  
   <body>  
      <script>  
         var date1, date2;  
         //define two date object variables with dates inside it  
         date1 = new Date();  
         date2 = new Date ("Dec 15, 2021, 21:45:10");  
  
         //calculate total number of seconds between two dates  
         var total_seconds = Math.abs(date2 - date1) / 1000;  
  
         //calculate days difference by dividing total seconds in a day  
         var days_difference = Math.floor (total_seconds / (60 * 60 * 24));  
           
         document.write("Number of days between dates from current date <br>" +   
                         date1 + " and <br>" + date2 + " are: <br>"   
                         + days_difference + " days");  
      </script>    
</body>  
</html>  
 */

/**
 * 
 * Example 3: Calculate the days remaining in Christmas day from the current date
We have one more example in which we will calculate the days till Christmas Day means for a specific date. Follow the below steps:

Define the current date (system date) by creating a date object using the new Date().
Define one more date using new Date() class method and fetch the Christmas date by date.getFullYear() method in it. The date.getFullYear() method will return the year (0-11 months in JavaScript).
In case Christmas has been already passed away this year, it will return the number of days remaining in Christmas of next year from the current date.
Now, its time to use Math.round() function to calculate the result in milliseconds and then convert this result into days. So, divide the Math.round(Christmas() - present_date.getTime()) by the total milliseconds in a day, i.e., 1000*60*60*24.
Remove the decimal value from the result and display it to the web using document.write() method.
Now, convert these steps into actual implement to calculate the days remaining in Christmas. The implementation is as easy as the steps are. See the below code:

Copy Code

<html>  
   <head>  
      <title>Calculate days remaining in Christmas</title>  
   </head>  
   <body>  
      <script>  
         //declare two variables in JavaScript  
         var current_date, christmas_day;  
  
         //total milliseconds in one day  
         var one_day_ms = 1000 * 60 * 60 * 24;  
  
         //set the current date in the variable   
         current_date = new Date();  
  
         //set the Christmas date in another variable where 0-11 is month in JavaScript  
         christmas_day= new Date(current_date.getFullYear(), 11, 25);  
  
         //calculate next year Christmas if this year?s date is already passed away   
         if (current_date.getMonth() == 11 && current_date.getdate() > 25)  
         {  
              christmas_day.setFullYear(christmas_day.getFullYear() + 1);   
         }  
  
         //calculate result in milliseconds and convert it into days  
         var res = Math.round(christmas_day.getTime() - current_date.getTime()) / (one_day_ms);           
  
         //remove the decimal point from the calculated result  
         var FinalResult = res.toFixed (0);  
  
         //display the final result on web  
         document.write("Number of days remaining in Christmas day: <br>" +   
                         current_date + " and <br>" + christmas_day + " are: <br>"  +  FinalResult + " days");  
      </script>    
</body>  
</html>  
 */