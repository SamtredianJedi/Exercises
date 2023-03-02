// JavaScript: Rotate a string from left to right




/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-5 with Solution
Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

Sample Solution:

HTML Code:

<!DOCTYPE html>
  <html> 
  <head>
  <title>JavaScript basic animation</title>
  <script type="text/javascript">
  </script>
  </head> <body onload="animate_string('target')"
  <pre id="target">w3resource </pre>
  </body> 
  </html>
  

JavaScript Code:

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

Explanation:

document.getElementById(id) : Returns a reference to the element by its ID; the ID is a string which can be used to identify the element; it can be established using the id attribute in HTML, or from script.
Parameters : id is a case-sensitive string representing the unique ID of the element being sought.

element.childNodes[0] will produce the same result as the HTML content of the first child node.

text.length: The length property represents the length of a string. It returns the number of characters units in the string.




ES6 Version:

function animate_string(id) 
{
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

setInterval(() => {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}





Live Demo:


html:

 <body onload="animate_string('target')"
  <pre id="target">w3resource </pre>
</body>


js:




function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


 */