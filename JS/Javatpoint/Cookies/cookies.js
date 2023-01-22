/**
 * 
 * JavaScript Cookies
A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing.

A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.

How Cookies Works?
When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.
So, to recognize the old user, we need to add the cookie with the response from the server.
browser at the client-side.
Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.
 */

/**
 * 
 * How to create a Cookie in JavaScript?
In JavaScript, we can create, read, update and delete a cookie by using document.cookie property.

The following syntax is used to create a cookie:

document.cookie="name=value";  
JavaScript Cookie Example
Example 1
Let's see an example to set and get a cookie.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
<input type="button" value="setCookie" onclick="setCookie()">  
<input type="button" value="getCookie" onclick="getCookie()">  
    <script>  
    function setCookie()  
    {  
        document.cookie="username=Duke Martin";  
    }  
    function getCookie()  
    {  
        if(document.cookie.length!=0)  
        {  
        alert(document.cookie);  
        }  
        else  
        {  
        alert("Cookie not available");  
        }  
    }  
    </script>  
  
</body>  
</html>  
Example 2
Here, we display the cookie's name-value pair separately.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
<input type="button" value="setCookie" onclick="setCookie()">  
<input type="button" value="getCookie" onclick="getCookie()">  
    <script>  
    function setCookie()  
    {  
        document.cookie="username=Duke Martin";  
    }  
    function getCookie()  
    {  
        if(document.cookie.length!=0)  
        {  
            var array=document.cookie.split("=");  
        alert("Name="+array[0]+" "+"Value="+array[1]);  
        }  
        else  
        {  
        alert("Cookie not available");  
        }  
    }  
    </script>  
  
</body>  
</html>  
Example 3
In this example, we provide choices of color and pass the selected color value to the cookie. Now, cookie stores the last choice of a user in a browser. So, on reloading the web page, the user's last choice will be shown on the screen.

<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
        <select id="color" onchange="display()">  
                <option value="Select Color">Select Color</option>  
                <option value="yellow">Yellow</option>  
                <option value="green">Green</option>  
                <option value="red">Red</option>  
            </select>  
            <script type="text/javascript">  
                function display()  
                {  
                    var value = document.getElementById("color").value;  
                    if (value != "Select Color")  
                    {  
                        document.bgColor = value;  
                        document.cookie = "color=" + value;  
                    }  
                }  
                window.onload = function ()  
                {  
                    if (document.cookie.length != 0)  
                    {  
                        var array = document.cookie.split("=");  
                        document.getElementById("color").value = array[1];  
                        document.bgColor = array[1];  
                    }  
                }  
              
                  
            </script>  
</body>  
</html>  
 */