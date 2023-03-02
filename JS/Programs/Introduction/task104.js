// JavaScript Basic: Exercise-2 with Solution





/**
 * 
 * 
 * 
 * 
 * Write a JavaScript function to print the contents of the current window.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Print the current page.</title>
</head>
<body>
<p></p>
<p>Click the button to print the current page.</p>
<button onclick="print_current_page()">Print this page</button>
</body>
</html>

JavaScript Code:

function print_current_page()
{
window.print();
}

Sample Output:

Click the button to print the current page.
Explanation:

window.print(): The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window, window.print() is used to open the Print Dialog to print the current document.

ES6 Version:

function print_current_page()
{
window.print();
}
Live Demo:




<body>
<p></p>
<p>Click the button to print the current page.</p>
<button onclick="print_current_page()">Print this page</button>
</body>


 */