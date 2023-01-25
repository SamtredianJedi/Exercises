/**
 * 
 Calculate current week number in JavaScript
Sometimes we need to calculate the current week number or the week number for a given date. This problem can be solved using the JavaScript programming language. JavaScript offers several date functions, such as getDays(), getMonth(), getTime(), to solve date-related tasks. Along with that, the math functions Math.floor() and Math.ceil() also help to calculate the week number.

Situation

In this approach, we will assign a number to each day of the week, e.g., 1 for Sunday, 2 for Monday, 3 for Tuesday, and so on. Similarly, we will assign the number to other days in the week. Note that weekday starts with Sunday and ends with Saturday.

Let's suppose today is Monday and the week number is 1. So, if we calculate the week number after 25 days, the week number will be 4th.

According to the week number calculation:

25 days = 7 + 7 + 7 + 4 days  
The following formula mentioned below is used to calculate the week number after p days:

Week Number = least integer [ p / 7 ]  
We can use this concept in our JavaScript example to calculate the week number. We will calculate the week number in two ways:

Calculate the week number of the current date
Calculate the week number for a predefined date
We will discuss both the methods in detail with examples. Along with that, we will calculate the weekdays dynamically by taking date input from the user using a dynamic HTML form.

Calculate the week number by taking date input dynamic HTML form
 */

/**
 * 
 * Approach 1: Calculate Week Number of current date
In this approach, we will find the week number of current date means the date will be taken from the system. It is a static way to calculate the week number. Follow each step for calculating weekdays:

Define a date variable todaydate and oneJan in JavaScript.
Initialize the todaydate variable by creating the date object using new Date(), which will take system date by default.
Initialize another variable oneJan by creating date object using new Date() but this time getFullYear() method inside it.
The getFullYear() function will return the year of current date along with first date of the year, e.g., 1 Jan 2020.
After getting the current date and year, now calculate the number of days using the Math.floor() method. So, calculate the difference of current date and current year date and divide it by total milliseconds in a day (1000*60*60*24).
Now, add 1 and numberofdays calculated in previous result to the day of current date and divide them by 7, i.e., (this.getDay() + 1 + numberofdays) / 7. Don't forget to put this whole calculation of step 6 inside Math.ceil() method.
Finally, display the calculated weekday on the web using document.write().
Now, we will convert these steps into actual implementation. See the code below:

Copy Code

<html>  
<head>  
      <title>Calculate week number of current date</title>  
</head>  
<body>  
   <script>  
         
      //define a date object variable that will take the current system date  
       todaydate = new Date();  
  
      //find the year of the current date  
       var oneJan =  new Date(todaydate.getFullYear(), 0, 1);   
    
       // calculating number of days in given year before a given date   
       var numberOfDays =  Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));   
    
       // adding 1 since to current date and returns value starting from 0   
       var result = Math.ceil(( todaydate.getDay() + 1 + numberOfDays) / 7);     
  
       //display the calculated result         
       document.write("Week Numbers of current date (" + todaydate +   
       ") is: <br>" + result);  
  
   </script>    
</body>  
</html>  
 */

/**
 * 
 * Approach 2: Calculate the week number for a predefined date
This approach will help to calculate the week number by providing a date in code. Follow the below step:

Define a date variable in JavaScript, i.e., date1
Initialize it by creating the date objects using new Date() and provide date inside it.
After defining the date, calculate the time difference between them by subtracting one date from another date using date2.getTime() - date1.getTime();
Now next step is to calculate the days between the dates. So, we will divide the time difference of both dates by the milliseconds in a day, i.e., 1000*60*60*24
At last, print the result calculated using the document.write() method.
Now, we will convert these steps into actual implementation. See the code below:

Copy Code

<html>  
<head>  
      <title>Calculate week number of predefined date</title>  
</head>  
<body>  
   <script>  
         
      //define a date object variable with date inside it  
      var date1 = new Date("11/27/2019");  
  
      //find the year of the entered date  
       var oneJan =  new Date(date1.getFullYear(), 0, 1);   
    
       // calculating number of days in given year before the given date   
       var numberOfDays =  Math.floor((date1 - oneJan) / (24 * 60 * 60 * 1000));   
    
       // adding 1 since to current date and returns value starting from 0   
       var result = Math.ceil(( date1.getDay() + 1 + numberOfDays) / 7);     
  
       //display the calculated result         
       document.write("Week Numbers of date (" + date1 +   
       ") is: <br>" + result);  
  
   </script>    
</body>  
</html>  
 */

/**
 * 
 * Calculate Week Number by entering a date using HTML form
In this approach, we will find the week number by providing a date using a dynamic HTML form. The user can choose the date from the calendar and enter to input field in HTML form. It is a dynamic way for calculating the week number in which a user can provide the input by itself on the web instead of providing the dates input in code by the programmer.

See the code below:

Copy Code

<html>   
<head>   
    <title> Calculate week number by user input </title>   
      <script>  
       function weekNumber() {  
  
         //define a variable and fetch the input from HTML form  
         var dateinput = document.getElementById("dateInput1").value;  
  
        //create a date object variable to store the date values  
         var date1 = new Date(dateinput);  
   
      //find the year of the current date  
       var oneJan =  new Date(date1.getFullYear(), 0, 1);   
    
       // calculating number of days in given year before the given date   
       var numberOfDays =  Math.floor((date1 - oneJan) / (24 * 60 * 60 * 1000));   
    
       // adding 1 since to current date and returns value starting from 0   
       var result = Math.ceil(( date1.getDay() + 1 + numberOfDays) / 7);     
  
       //return the calculated result and display it  
       return document.getElementById("result").innerHTML =  "Week number of given date is: " + result;  
       }  
      </script>    
</head>    
<body>   
    
    <h2 style="color: 32A80F" align="Center">    
            Javatpoint: Calculate Week Number using user input   
        <br> <br> </h2>   
    
        <p align="Center"> <b> Enter date   </b>   
        <input type="date" id="dateInput1">   
        <br> <br>      
    
        <button onclick="weekNumber()">   
          Calculate Week Number   
        </button>   
    </p>   
    
    <h3 style="color:32A80F" id="result" align="center"></h3>   
    
</body>    
</html>  
 */