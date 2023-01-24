/**
 * 
 * JavaScript reload() method
In JavaScript, the reload() method is used to reload a webpage. It is similar to the refresh button of the browser. This method does not return any value.

Syntax
location.reload()  
This method can have optional parameters true and false. The true keyword force to reload the page from the server, while the false keyword reloads the page from the cache.

The false is the default parameter of this method, so if we omitted the parameter's value, the reload() method reloads the page from the cache. It means that the object.reload() is same as the object.reload(false).

Let's see an example of using the location.reload() method.

Example
Here, the function fun() contains the location.reload() method. We are calling the function fun() using the onclick attribute of the button element. So, we have to click the given HTML 'Reload' button to see the effect. After clicking the button, the page will reload.

<!DOCTYPE html>  
<html>  
<head>  
<title>  
location.reload() method  
</title>  
<script>  
function fun() {  
location.reload();  
}  
</script>  
</head>  
  
<body>  
<h1> Welcome to the javaTpoint.com </h1>  
  
<h2> This is an example of location.reload() method </h2>  
  
<p> Click the following 'Reload' button to see the effect. </p>  
  
<button onclick = "fun()"> Reload </button>  
</body>  
</html>  
 */

/**
 * 
 * n the above example, instead of calling the fun() function, we can also attach the location.reload() method to the button markup. It can be done as given below:

<button onclick = "location.reload()"> Reload </button>  
 */