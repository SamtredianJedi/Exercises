 /*

  Method	Description
 alert()	displays the alert box containing message with ok button.
 confirm()	displays the confirm dialog box containing message with ok and cancel button.
 prompt()	displays a dialog box to get input from the user.
 open()	opens the new window.
 close()	closes the current window.
 setTimeout()	performs action after specified time like calling function, evaluating expressions etc.
 Example of alert() in javascript
 It displays alert dialog box. It has message and ok button.

 <script type="text/javascript">  
 function msg(){  
  alert("Hello Alert Box");  
 }  
 </script>  
 <input type="button" value="click" onclick="msg()"/>  

 */

 /*

 Example of confirm() in javascript
 It displays the confirm dialog box. It has message with ok and cancel buttons.

 <script type="text/javascript">  
 function msg(){  
 var v= confirm("Are u sure?");  
 if(v==true){  
 alert("ok");  
 }  
 else{  
 alert("cancel");  
 }  
   
 }  
 </script>  
   
 <input type="button" value="delete record" onclick="msg()"/>  

 */

 /*

 Example of prompt() in javascript
 It displays prompt dialog box for input. It has message and textfield.

 <script type="text/javascript">  
 function msg(){  
 var v= prompt("Who are you?");  
 alert("I am "+v);  
   
 }  
 </script>  
   
 <input type="button" value="click" onclick="msg()"/>  

 */

 /*

 Example of open() in javascript
 It displays the content in a new window.

 <script type="text/javascript">  
 function msg(){  
 open("http://www.javatpoint.com");  
 }  
 </script>  
 <input type="button" value="javatpoint" onclick="msg()"/>  

 */

 /*

 Example of setTimeout() in javascript
 It performs its task after the given milliseconds.

 <script type="text/javascript">  
 function msg(){  
 setTimeout(  
 function(){  
 alert("Welcome to Javatpoint after 2 seconds")  
 },2000);  
   
 }  
 </script>  
   
 <input type="button" value="click" onclick="msg()"/>  

 */