/**
 * 
 * In this chapter, we will discuss password validation using JavaScript. We need to validate a password every time whenever a user creates an account on any website or app. So, we have to verify a valid password as well as put the confirm password validation. For a valid password, the following parameters must be contained by it to be valid -

A password should be alphanumeric.
First letter of the password should be capital.
Password must contain a special character (@, $, !, &, etc).
Password length must be greater than 8 characters.
One of the most important that the password fields should not be empty.
Whenever a user creates a password, there is always one more field of confirm password. It checks that the password entered by the user is same as this confirm password fields. To create a valid password, both the password and confirm password fields value must be matched.

First one, we will check for a valid password and then confirm password validation checks.

Valid password Validation
In this example, we will check that the password created by the user is valid or not and match with all the parameter discussed above. See the code below for password verification.

Copy Code

<html>  
<head>  
<title> Verification of valid Password </title>  
</head>  
<script>  
function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}  
</script>  
  
<body>  
<center>  
<h1 style="color:green">Javatpoint</h1>  
<h3> Verify valid password Example </h3>  
  
<form onsubmit ="return verifyPassword()">  
<!-- Enter Password -->  
<td> Enter Password </td>  
<input type = "password" id = "pswd" value = "">   
<span id = "message" style="color:red"> </span> <br><br>  
  
<!-- Click to verify valid password -->  
<input type = "submit" value = "Submit">  
  
<!-- Click to reset fields -->  
<button type = "reset" value = "Reset" >Reset</button>  
</form>  
</center>  
</body>  
</html>  
 */

/**
 * 
 * Confirm Password Validation
In this example, we will validate the password by verifying both the password entered by the user are same. This process will be done at the client site using JavaScript before the form loading.

Copy Code

<html>  
<head>  
<title> Password Matching Validation </title>  
</head>  
<script>  
function matchPassword() {  
  var pw1 = document.getElementById("pswd1");  
  var pw2 = document.getElementById("pswd2");  
  if(pw1 != pw2)  
  {   
    alert("Passwords did not match");  
  } else {  
    alert("Password created successfully");  
  }  
}  
</script>  
  
<body>  
<center>  
<form>  
<h1 style="color:green">Javatpoint</h1>  
<h3> Confirm password Validation Example </h3>  
<!-- Enter Password -->  
<td> Enter Password </td>  
<input type = "password" name = "pswd1"> <br><br>  
  
<!-- Enter Confirm password -->  
<td> Confirm Password </td>  
<input type = "password" name = "pswd2"> <br><br>  
  
<!?Click to validate confirm password -->  
<button type = "submit" onclick="matchPassword()">Submit</button>  
  
<!-- Click to reset fields -->  
<button type = "reset" value = "Reset" >Reset</button>  
</form>  
</center>  
</body>  
</html>  
 */

/**
 * 
 * A complete form with password validation
In the above examples, you have learned to verify a valid password and confirm password validation. Now, we will keep both the validations in a single form to complete the password validation process.

For this, we will create a simple basic signup form that will contain some fields, such as first name, last name, create password, and confirm password. The fields with a star (*) are required fields in which the user must have to provide some value. We will put the following validation in this form to validate a password:

Empty field validation
Minimum password length validation, i.e., > 8
Maximum password length validation, i.e., <15
Confirm password validation
 */

/**
 * 
 * <html>  
<head>  
<title> Validate the Password </title>  
</head>  
<script>  
function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
    var name1 = document.getElementById("fname").value;  
    var name2 = document.getElementById("lname").value;  
      
    //check empty first name field  
    if(name1 == "") {  
      document.getElementById("blankMsg").innerHTML = "**Fill the first name";  
      return false;  
    }  
      
    //character data validation  
    if(!isNaN(name1)){  
      document.getElementById("blankMsg").innerHTML = "**Only characters are allowed";  
      return false;  
    }  
  
   //character data validation  
    if(!isNaN(name2)){  
      document.getElementById("charMsg").innerHTML = "**Only characters are allowed";  
      return false;  
    }   
    
    //check empty password field  
    if(pw1 == "") {  
      document.getElementById("message1").innerHTML = "**Fill the password please!";  
      return false;  
    }  
    
    //check empty confirm password field  
    if(pw2 == "") {  
      document.getElementById("message2").innerHTML = "**Enter the password please!";  
      return false;  
    }   
     
    //minimum password length validation  
    if(pw1.length < 8) {  
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
      return false;  
    }  
  
    //maximum length of password validation  
    if(pw1.length > 15) {  
      document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
      return false;  
    }  
    
    if(pw1 != pw2) {  
      document.getElementById("message2").innerHTML = "**Passwords are not same";  
      return false;  
    } else {  
      alert ("Your password created successfully");  
      document.write("JavaScript form has been submitted successfully");  
    }  
 }  
</script>  
  
<body>  
<h1 style="color:green">Javatpoint</h1>  
<h3> Verify valid password Example </h3>  
  
<form onsubmit ="return validateForm()">  
  
<!-- Enter first name -->  
<td> Full Name* </td>  
<input type = "text" id = "fname" value = "">   
<span id = "blankMsg" style="color:red"> </span> <br><br>  
  
<!-- Enter last name -->  
<td> Last Name </td>  
<input type = "text" id = "lname" value = "">   
<span id = "charMsg" style="color:red"> </span> <br><br>  
  
<!-- Create a new password -->  
<td> Create Password* </td>  
<input type = "password" id = "pswd1" value = "">   
<span id = "message1" style="color:red"> </span> <br><br>  
  
<!?Enter confirm password -->  
<td> Confirm Password* </td>  
<input type = "password" id = "pswd2" value = "">   
<span id = "message2" style="color:red"> </span> <br><br>  
  
<!-- Click to verify valid password -->  
<input type = "submit" value = "Submit">  
  
<!-- Click to reset fields -->  
<button type = "reset" value = "Reset" >Reset</button>  
</form>  
</body>  
</html>  
 */