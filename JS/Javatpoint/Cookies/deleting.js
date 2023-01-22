/**
 * 
 * Deleting a Cookie in JavaScript
In the previous section, we learned the different ways to set and update a cookie in JavaScript. Apart from that, JavaScript also allows us to delete a cookie. Here, we see all the possible ways to delete a cookie.

Different ways to delete a Cookie
These are the following ways to delete a cookie:

A cookie can be deleted by using expire attribute.
A cookie can also be deleted by using max-age attribute.
We can delete a cookie explicitly, by using a web browser.
Examples to delete a Cookie
Example 1
In this example, we use expire attribute to delete a cookie by providing expiry date (i.e. any past date) to it.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
     
<input type="button" value="Set Cookie" onclick="setCookie()">  
<input type="button" value="Get Cookie" onclick="getCookie()">  
<script>  
function setCookie()   
{  
    document.cookie="name=Martin Roy; expires=Sun, 20 Aug 2000 12:00:00 UTC";  
    
}   
function getCookie()  
{  
    if(document.cookie.length!=0)  
    {  
    alert(document.cookie);  
    }  
    else  
    {  
        alert("Cookie not avaliable");  
    }  
}  
</script>  
</body>  
</html>  
Example 2
In this example, we use max-age attribute to delete a cookie by providing zero or negative number (that represents seconds) to it.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
     
<input type="button" value="Set Cookie" onclick="setCookie()">  
<input type="button" value="Get Cookie" onclick="getCookie()">  
<script>  
function setCookie()   
{  
    document.cookie="name=Martin Roy;max-age=0";  
}   
function getCookie()  
{  
    if(document.cookie.length!=0)  
    {  
    alert(document.cookie);  
    }  
    else  
    {  
        alert("Cookie not avaliable");  
    }  
}  
  
</script>  
</body>  
</html>  
Example 3
Let's see an example to set, get and delete multiple cookies.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
     
<input type="button" value="Set Cookie1" onclick="setCookie1()">  
<input type="button" value="Get Cookie1" onclick="getCookie1()">  
<input type="button" value="Delete Cookie1" onclick="deleteCookie1()">  
<br>  
<input type="button" value="Set Cookie2" onclick="setCookie2()">  
<input type="button" value="Get Cookie2" onclick="getCookie2()">  
<input type="button" value="Delete Cookie2" onclick="deleteCookie2()">  
<br>  
<input type="button" value="Display all cookies" onclick="displayCookie()">  
  
<script>  
function setCookie1()   
{  
    document.cookie="name=Martin Roy";  
     cookie1=  document.cookie;  
}   
function setCookie2()   
{  
    document.cookie="name=Duke William";  
     cookie2=  document.cookie;  
}   
  
function getCookie1()  
{  
    if(cookie1.length!=0)  
    {  
    alert(cookie1);  
    }  
    else  
    {  
        alert("Cookie not available");  
    }  
}  
  
function getCookie2()  
{  
    if(cookie2.length!=0)  
    {  
    alert(cookie2);  
    }  
    else  
    {  
        alert("Cookie not available");  
    }  
}  
  
function deleteCookie1()  
{  
    document.cookie=cookie1+";max-age=0";  
    cookie1=document.cookie;  
    alert("Cookie1 is deleted");  
}  
  
function deleteCookie2()  
{  
    document.cookie=cookie2+";max-age=0";  
    cookie2=document.cookie;  
   alert("Cookie2 is deleted");  
}  
  
function displayCookie()  
{  
if(cookie1!=0&&cookie2!=0)  
{  
    alert(cookie1+" "+cookie2);  
}  
else if(cookie1!=0)  
{  
    alert(cookie1);  
}  
else if(cookie2!=0)  
{  
    alert(cookie2);  
}  
else{  
    alert("Cookie not available");  
}  
  
}  
  
</script>  
</body>  
</html>  
Example 4
Let's see an example to delete a cookie explicitly.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
     
<input type="button" value="Set Cookie" onclick="setCookie()">  
<input type="button" value="Get Cookie" onclick="getCookie()">  
<script>  
function setCookie()   
{  
    document.cookie="name=Martin Roy";  
    
}   
function getCookie()  
{  
    if(document.cookie.length!=0)  
    {  
    alert(document.cookie);  
    }  
    else  
    {  
        alert("Cookie not avaliable");  
    }  
}  
</script>  
</body>  
</html>  
After clicking Set Cookie once, whenever we click Get Cookie, the cookies key and value is displayed on the screen.
 */