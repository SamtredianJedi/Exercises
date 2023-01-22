/**
 * 
 * JavaScript onload
In JavaScript, this event can apply to launch a particular function when the page is fully displayed. It can also be used to verify the type and version of the visitor's browser. We can check what cookies a page uses by using the onload attribute.

In HTML, the onload attribute fires when an object has been loaded. The purpose of this attribute is to execute a script when the associated element loads.

In HTML, the onload attribute is generally used with the <body> element to execute a script once the content (including CSS files, images, scripts, etc.) of the webpage is completely loaded. It is not necessary to use it only with <body> tag, as it can be used with other HTML elements.

The difference between the document.onload and window.onload is: document.onload triggers before the loading of images and other external content. It is fired before the window.onload. While the window.onload triggers when the entire page loads, including CSS files, script files, images, etc.

Syntax
window.onload = fun()  
Let's understand this event by using some examples.

Example1
In this example, there is a div element with a height of 200px and a width of 200px. Here, we are using the window.onload() to change the background color, width, and height of the div element after loading the web page.

The background color is set to 'red', and width and height are set to 300px each.

<!DOCTYPE html>  
<html>  
<head>  
<meta charset = " utf-8">  
<title> window.onload() </title>  
<style type = "text/css">  
#bg{  
width: 200px;  
height: 200px;  
border: 4px solid blue;  
}  
</style>  
<script type = "text/javascript">  
window.onload = function(){  
document.getElementById("bg").style.backgroundColor = "red";  
document.getElementById("bg").style.width = "300px";  
document.getElementById("bg").style.height = "300px";  
}  
</script>  
</head>  
<body>  
<h2> This is an example of window.onload() </h2>  
<div id = "bg"></div>  
</body>  
</html>  



 */


/**
 * 
 * Example2
In this example, we are implementing a simple animation by using the properties of the DOM object and functions of javascript. We use the JavaScript function getElementById() for getting the DOM object and then assign that object into a global variable.

<html>     
   <head>     
      <script type = "text/javascript">     
        
            var img = null;     
            function init(){      
               img = document.getElementById('myimg');    
               img.style.position = 'relative';         
               img.style.left = '50px';       
            }         
            function moveRight(){      
               img.style.left = parseInt(    
               img.style.left) + 100 + 'px';      
            }      
            window.onload = init;      
       
      </script>     
   </head>     
       
   <body>     
      <form>     
         <img id = "myimg" src = "train1.png" />     
         <center>    
            <p>Click the below button to move the image right</p>     
         <input type = "button" value = "Click Me" onclick = "moveRight();" />    
      </center>     
      </form>    
   </body>    
       
</html>  


 */


/**
 * 
 * Example3
It is a simple example of using the HTML onload attribute with the function defined in JavaScript. In this example, the alert() function gets called whenever the document refresh.

<!DOCTYPE html>  
<html>  
<head>  
<style>  
</style>  
<script>  
   function fun() {  
      alert("Hello World!!, Welcome to the javaTpoint.com");  
   }  
</script>  
</head>  
<body onload = "fun()">  
<h1> Example of the HTML onload attribute </h1>  
<p> Try to refresh the document to see the effect. </p>  
</body>  
</html>  
 */