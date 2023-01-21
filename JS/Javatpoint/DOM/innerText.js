/*

Javascript innerText Example
In this example, we are going to display the password strength when releases the key after press.

<script type="text/javascript" >  
function validate() {  
var msg;  
if(document.myForm.userPass.value.length>5){  
msg="good";  
}  
else{  
msg="poor";  
}  
document.getElementById('mylocation').innerText=msg;  
 }  
  
</script>  
<form name="myForm">  
<input type="password" value="" name="userPass" onkeyup="validate()">  
Strength:<span id="mylocation">no strength</span>  
</form>  

*/