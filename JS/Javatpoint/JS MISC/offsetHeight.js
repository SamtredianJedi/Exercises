/**
 * 
 * JavaScript offsetHeight
The offsetHeight is an HTML DOM property, which is used by JavaScript programming language. It returns the visible height of an element in pixels that includes the height of visible content, border, padding, and scrollbar if present. The offsetHeight is often used with offsetWidth property. The offsetWidth is one more property of HTML DOM, which is almost same as the offsetHeight. These properties are used by JavaScript to find the visible height and width of the HTML elements.

The offsetHeight is a combination of following HTML elements:

offsetHeight = height + border + padding + horizontal scrollbar  
On the other hand, the offsetWidth includes the following elements:

offsetWidth = width + border + padding + vertical scrollbar  
Remember one thing that offsetHeight and offsetWidth do not include margin, neither top margin nor bottom margin. These DOM properties are used by JavaScript programming language to calculate the dimension of HTML elements in pixels.
 */

/**
 * 
 * Syntax
Below is a simple syntax of offsetHeight:

element.offsetHeight  
Here, element is a variable created in JavaScript to hold the CSS properties values or HTML text paragraph.

Return Values
The offsetHeight and offsetWidth return the calculated height and width of the HTML elements in pixels, respectively.

Examples
Below is a list of some examples. With the help of which we will see how offsetHeight property is used and works.

Example 1
<html>  
<head>  
<title>  
HTML DOM offsetHeight Property example  
</title>  
  
<style>  
#JTP {  
height: 120px;  
width: 250px;  
margin: 20px;  
padding: 15px;  
background-color: yellow;  
}  
</style>  
</head>  
  
<script>  
function getInfo() {  
var eleValue = document.getElementById("JTP");  
var txt = "Height of the elements paragraph along with padding and border in pixels is: " + eleValue.offsetHeight + "px";  
document.getElementById("sudo").innerHTML = txt;  
}  
</script>  
  
<body>  
<h2> HTML DOM offsetHeight Property example </h2>  
<div id= "JTP">  
<b> A basic information about this div tab: </b>  
<p id= "sudo"> </p>  
</div>  
<button type="JTP" onclick="getInfo()"> Submit </button>  
  
</body>  
</html> 
 */

/**
 * 
 * Example 2
In this example, we will calculate the offsetHeight for a paragraph provided in this example along with CSS styling. Remember that the offsetHeight will not include margin.

<html>  
<head>  
<title>  
HTML DOM offsetHeight Property example  
</title>  
<style>  
#PStyle {  
height: 220px;  
width: 320px;  
margin: 20px;  
padding: 15px;  
background-color: pink;  
}  
</style>  
</head>  
  
<script>  
function getInfo() {  
var eleValue = document.getElementById("PStyle");  
var txt = "Height of the elements paragraph along with padding and border in pixels is: " + eleValue.offsetHeight + "px";  
document.getElementById("sudo").innerHTML = txt;  
}  
</script>  
  
<body>  
<h3> HTML DOM offsetHeight Property Example 2 </h3>  
<div id= "PStyle">  
<p> In this example, we will calculate the offset height for this paragraph. We have also provided CSS styling to this paragraph. This offsetHeight will include the height of text, padding, border except margin taken by this paragraph. </p>  
  
<b> OffsetHeight of this div tab paragraph: </b>  
<p id= "sudo"> </p>  
</div>  
<button type= "button" onclick = "getInfo()"> Calculate offsetHeight </button>  
  
</body>  
</html>  
 */

/**
 * 
 * Example 3 without CSS styling
See another example of calculating the offsetHeight. We have not included any CSS style like height, width, margin, padding, etc., expect background color. So, the paragraph will be a simple paragraph with no styling.
 */

/**
 * 
 * <html>  
<head>  
<title>  
HTML DOM offsetHeight Property example  
</title>  
<style>  
#PStyle {  
background-color: orange;  
}  
</style>  
</head>  
  
<script>  
function getInfo() {  
var eleValue = document.getElementById("PStyle");  
var txt = "Height of the elements in paragraph calculated as pixels is: " + eleValue.offsetHeight + "px";  
document.getElementById("sudo").innerHTML = txt;  
}  
</script>  
  
<body>  
<h3> HTML DOM offsetHeight Property Example 3 </h3>  
<div id= "PStyle">  
<p> In this example, we will calculate the offset height of this given paragraph. We have jusr included background color in CSS styling not height, width, margin, or padding to this paragraph. So, the offsetHeight will be calculted for the height of text taken by this paragraph. </p>  
  
<b> OffsetHeight of this div tab paragraph: </b>  
<p id= "sudo"> </p>  
</div>  
<button type= "submit" onclick = "getInfo()"> Calculate offsetHeight </button>  
  
</body>  
</html>  
 */

/**
 * 
 * Calculate both offsetHeight and offsetWidth
In this example, we will calculate both offsetHeight and offsetWidth for a paragraph inside a div tab. So, you can understand how differently they calculated. Here, we will use CSS and pass the height, width, margin, padding, etc. for styling in this example.

Copy and run the below code on your system to understand better.

<html>  
<head>  
<title>  
HTML DOM offsetHeight Property example  
</title>  
  
<style>  
#PStyle {  
height: 180px;  
width: 400px;  
margin: 20px;  
padding: 15px;  
background-color: lightblue;  
}  
</style>  
</head>  
  
<script>  
function getInfo() {  
var eleValue = document.getElementById("PStyle");  
var txt1 = "OffsetHeight of the paragraph along with padding and border in pixels is: " + eleValue.offsetHeight + "px";  
var txt2 = "OffsetWidth of the paragraph along with padding and border in pixels is: " + eleValue.offsetWidth + "px";  
  
document.getElementById("sudo1").innerHTML = txt1;  
document.getElementById("sudo2").innerHTML = txt2;  
}  
</script>  
  
<body>  
<h2> Calculation of offsetHeight and offsetWidth </h2>  
<div id= "PStyle">  
<b> A basic information about this div tab: </b>  
<p id= "sudo1"> </p>  
<p id= "sudo2"> </p>  
</div>  
<button type="button" onclick="getInfo()"> Submit </button>  
  
</body>  
</html>  
 */