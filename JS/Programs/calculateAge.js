/**
 * 
 JavaScript offers some built-in date and time functions, which helps to calculate the age from the date (Date of Birth). Using these JavaScript methods, you can easily find the age of anyone. For this, we require a date input from the user and the current system date. We need to track the following conditions in mind while calculating the difference between them:

If the current date is less than the date (birthdate) entered by the user, that month will not be counted as the month is not completed. Otherwise, we will add the number of month days (30 or 31) to the current date to get the difference between them.
If the current month is less than the birth month, the current year will not be counted. To get the month's difference, we will subtract by adding the total number of months (12) to the current month.
Finally, we just need to subtract the date, month and year after satisfying the above two conditions.
Now, we will convert this process to actual implementation.

There are various ways to calculate the age from date of birth. We will discuss simple and easily understandable methods to calculate the age using JavaScript.

Example 1: Predefined date input
In this example, we have provided a date (DOB) in code instead of taking input from the user.

<script>  
    var dob = new Date("06/24/2008");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.write("Age of the date entered: " + age + " years");  
</script>  
 */

/**
 * 
 * Example 2: dynamic date input
In this example, we will create an HTML form to take the date input from the user and then calculate the age using JavaScript. It will take dynamic input from the user. This HTML form will use the calendar to choose date input.

Copy Code

<html>  
<head>  
<script>  
function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    return document.getElementById("result").innerHTML =    
             "Age is: " + age + " years. ";  
    }  
}  
</script>  
</head>  
<body>  
<center>  
<h2 style="color: 32A80F" align="center"> Calculate Age from Date of Birth <br> <br> </h2>   
  
<!-- Choose a date and enter in input field -->  
<b> Enter Date of Birth: <input type=date id = DOB> </b>  
<span id = "message" style="color:red"> </span> <br><br>    
  
<!-- Choose a date and enter in input field -->  
<button type="submit" onclick = "ageCalculator()"> Calculate age </button> <br><br>  
<h3 style="color:32A80F" id="result" align="center"></h3>   
</center>  
</body>  
</html>  
 */

/**
 * 
 * Example 2: Calculate age in year, month and days
This example will calculate and display the age in year, month, and days rather than only in years. E.g., for a DOB 27 Dec 2015, the person will be 4 years, 9 months, and 23 days old.

Copy Code

<html>  
<head>  
<script>  
  
function ageCalculator() {  
    //collect input from HTML form and convert into date format  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
      
    //check user provide input or not  
    if(userinput==null || userinput==''){  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    }   
      
    //execute if the user entered a date   
    else {  
    //extract the year, month, and date from user date input  
    var dobdobYear = dob.getYear();  
    var dobdobMonth = dob.getMonth();  
    var dobdobDate = dob.getDate();  
      
    //get the current date from the system  
    var now = new Date();  
    //extract the year, month, and date from current date  
    var currentYear = now.getYear();  
    var currentMonth = now.getMonth();  
    var currentDate = now.getDate();  
      
    //declare a variable to collect the age in year, month, and days  
    var age = {};  
    var ageString = "";  
    
    //get years  
    yearAge = currentYear - dobYear;  
      
    //get months  
    if (currentMonth >= dobMonth)  
      //get months when current month is greater  
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
    //get days  
    if (currentDate >= dobDate)  
      //get days when the current date is greater  
      var dateAge = currentDate - dobDate;  
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  
    //group the age in a single variable  
    age = {  
    years: yearAge,  
    months: monthAge,  
    days: dateAge  
    };  
        
        
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
       ageageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
       ageString = "Only " + age.days + " days old!";  
    //when current month and date is same as birth date and month  
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )  
       ageageString = age.years +  " years old. Happy Birthday!!";  
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )  
       ageageString = age.years + " years and " + age.months + " months old.";  
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )  
       ageageString = age.months + " months and " + age.days + " days old.";  
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )  
       ageageString = age.years + " years, and" + age.days + " days old.";  
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )  
       ageageString = age.months + " months old.";  
    //when current date is same as dob(date of birth)  
    else ageString = "Welcome to Earth! <br> It's first day on Earth!";   
  
    //display the calculated age  
    return document.getElementById("result").innerHTML = ageString;   
               
  }  
}  
</script>  
</head>  
<body>  
<center>  
<h2 style="color: 32A80F" align="center"> Calculate Age from Date of Birth <br> <br> </h2>   
  
<b> Enter Date of Birth: <input type=date id = DOB>  </b>  
<span id = "message" style="color:red"> </span> <br><br>    
<button type="submit" onclick = "ageCalculator()"> Calculate age </button> <br><br>  
<h3 style="color:32A80F" id="result" align="center"></h3>   
</center>  
</body>  
</html>  
 */

/**
 * 
 * Example 4
In this example, we are calculating the age by converting dates difference in milliseconds. It is also an easy way to calculate age.

<html>  
<head>  
<script>  
  
function ageCalculator() {  
    //collect input from HTML form and convert into date format  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
      
    //check user provide input or not  
    if(userinput==null || userinput==''){  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    }   
      
    //execute if user entered a date   
    else {  
    //extract and collect only date from date-time string  
    var mdate = userinput.toString();  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(5,7), 10);  
    var dobDate = parseInt(mdate.substring(8,10), 10);  
      
    //get the current date from system  
    var today = new Date();  
    //date string after broking  
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    //calculate the difference of dates  
    var diffInMillisecond = today.valueOf() - birthday.valueOf();  
  
    //convert the difference in milliseconds and store in day and year variable          
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
  
    //when birth date and month is same as today's date        
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
            alert("Happy Birthday!");  
        }  
          
     var month_age = Math.floor(day_age/30);          
     day_ageday_age = day_age % 30;  
          
     var tMnt= (month_age + (year_age*12));  
     var tDays =(tMnt*30) + day_age;  
       
    //DOB is greater than today's date, generate an error: Invalid date    
     if (dob>today) {  
        document.getElementById("result").innerHTML = ("Invalid date input - Please try again!");  
      }  
      else {  
        document.getElementById("result").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"  
      }  
   }  
}  
</script>  
</head>  
<body>  
<center>  
<h2 style="color: #008CBA" align="center"> Calculate Age from Date of Birth <br> <br> </h2>   
  
<b> Enter Date of Birth: <input type=date id = DOB>  </b>  
<span id = "message" style="color:red"> </span> <br><br>    
<button type="submit" onclick = "ageCalculator()"> Calculate age </button> <br><br>  
<h3 style="color:#008CBA" id="result" align="center"></h3>   
</center>  
</body>  
</html>  


 */