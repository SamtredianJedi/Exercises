/*

Example of innerHTML property
In this example, we are going to create the html form when user clicks on the button.

In this example, we are dynamically writing the html form inside the div name having the id mylocation. We are identifing this position by calling the document.getElementById() method.

<script type="text/javascript" >  
function showcommentform() {  
var data="Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='80'></textarea>  
<br><input type='submit' value='Post Comment'>";  
document.getElementById('mylocation').innerHTML=data;  
}  
</script>  
<form name="myForm">  
<input type="button" value="comment" onclick="showcommentform()">  
<div id="mylocation"></div>  
</form>  

*/

/*

Show/Hide Comment Form Example using innerHTML
<!DOCTYPE html>  
<html>  
<head>  
<title>First JS</title>  
<script>  
var flag=true;  
function commentform(){  
var cform="<form action='Comment'>Enter Name:<br><input type='text' name='name'/><br/>  
Enter Email:<br><input type='email' name='email'/><br>Enter Comment:<br/>  
<textarea rows='5' cols='70'></textarea><br><input type='submit' value='Post Comment'/></form>";  
if(flag){  
document.getElementById("mylocation").innerHTML=cform;  
flag=false;  
}else{  
document.getElementById("mylocation").innerHTML="";  
flag=true;  
}  
}  
</script>  
</head>  
<body>  
<button onclick="commentform()">Comment</button>  
<div id="mylocation"></div>  
</body>  
</html>  

*/