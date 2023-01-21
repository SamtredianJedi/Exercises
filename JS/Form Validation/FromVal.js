/*

JavaScript Form Validation Example
In this example, we are going to validate the name and password. The name can’t be empty and password can’t be less than 6 characters long.

Here, we are validating the form on form submit. The user will not be forwarded to the next page until given values are correct.

<script>  
function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
</script>  
<body>  
<form name="myform" method="post" action="abc.jsp" onsubmit="return validateform()" >  
Name: <input type="text" name="name"><br/>  
Password: <input type="password" name="password"><br/>  
<input type="submit" value="register">  
</form>  

*/

/*

JavaScript Retype Password Validation
<script type="text/javascript">  
function matchpass(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  
}  
</script>  
  
<form name="f1" action="register.jsp" onsubmit="return matchpass()">  
Password:<input type="password" name="password" /><br/>  
Re-enter Password:<input type="password" name="password2"/><br/>  
<input type="submit">  
</form>  

*/

/*

JavaScript Number Validation
Let's validate the textfield for numeric value only. Here, we are using isNaN() function.

<script>  
function validate(){  
var num=document.myform.num.value;  
if (isNaN(num)){  
  document.getElementById("numloc").innerHTML="Enter Numeric value only";  
  return false;  
}else{  
  return true;  
  }  
}  
</script>  
<form name="myform" onsubmit="return validate()" >  
Number: <input type="text" name="num"><span id="numloc"></span><br/>  
<input type="submit" value="submit">  
</form>  

*/

/*

JavaScript validation with image
Let’s see an interactive JavaScript form validation example that displays correct and incorrect image if input is correct or incorrect.

<script>  
function validate(){  
var name=document.f1.name.value;  
var password=document.f1.password.value;  
var status=false;  
  
if(name.length<1){  
document.getElementById("nameloc").innerHTML=  
" <img src='unchecked.gif'/> Please enter your name";  
status=false;  
}else{  
document.getElementById("nameloc").innerHTML=" <img src='checked.gif'/>";  
status=true;  
}  
if(password.length<6){  
document.getElementById("passwordloc").innerHTML=  
" <img src='unchecked.gif'/> Password must be at least 6 char long";  
status=false;  
}else{  
document.getElementById("passwordloc").innerHTML=" <img src='checked.gif'/>";  
}  
return status;  
}  
</script>  
  
<form name="f1" action="#" onsubmit="return validate()">  
<table>  
<tr><td>Enter Name:</td><td><input type="text" name="name"/>  
<span id="nameloc"></span></td></tr>  
<tr><td>Enter Password:</td><td><input type="password" name="password"/>  
<span id="passwordloc"></span></td></tr>  
<tr><td colspan="2"><input type="submit" value="register"/></td></tr>  
</table>  
</form>  

*/


/*


JavaScript email validation
We can validate the email by the help of JavaScript.

There are many criteria that need to be follow to validate the email id such as:

email id must contain the @ and . character
There must be at least one character before and after the @.
There must be at least two characters after . (dot).
Let's see the simple example to validate the email field.

<script>  
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
</script>  
<body>  
<form name="myform"  method="post" action="#" onsubmit="return validateemail();">  
Email: <input type="text" name="email"><br/>  
  
<input type="submit" value="register">  
</form>  

*/