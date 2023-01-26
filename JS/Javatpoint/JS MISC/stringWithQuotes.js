/**
 * 
 JavaScript String with quotes
The strings are usually used to store and manipulate the text data. However, you can also store special characters and numeric data in strings as well. E.g., address or email id, which contains multitype data.

Strings are created by putting data inside the quotes. JavaScript and other programming languages allow the users to keep the data either in double quotes (" ") or single quotes (' '). This chapter will show you how to print string with quotes.

For example
Quotes	Example
Single Quote (' ')	'This is a string inside single quotes.'
Double Quote (" ")	"This is a string inside double quotes."
These single quotes and double quotes do not print with string on the web browser. But sometimes we need to print the quotes with the string as well. Some words like it's, b'day, seven o'clock, can't, and etc. Firstly, see how a string simply display on the web.

Example: String without quotes
See the simple example of printing the strings without the single and double-quotes.

Copy Code

<script>  
var pat1 = 'A string inside single quote';  
var pat2 = "A string inside double quote";  
document.write(pat1 + "</br>");  
document.write(pat2);  
</script>  
 */

/**
 * 
 * Enclosing quotation marks
You can use a backslash (\) with the particular word or string to escape the quotation mark. Remember one thing; if you do not want to use the backslash (\), you have to use the quotation mark alternatively inside and outside of a string. This means that if you try to use a single quote inside a string, the outside quotes should be double quotes. Similarly, if you try to use a double quote inside a string, the outside quotes must be single quotes.

Let's see how it will be done in JavaScript.

Example: Print quotes using backslash (\)
In this example, we will use the backslash (\) to escape the quotation mark.

Copy Code

<html>  
<body>  
<script>  
var ssingleQ = 'It\'s nine o\' clock in the morning.';  
var doubleQ = "Mukesh Ambani is \"the richest man\" of India.";  
document.write(singleQ + "</br>");  
document.write(doubleQ + "</br>");  
</script>  
</body>  
</html>  
 */

/**
 * 
 * JavaScript misunderstand the string if you write it as the below string:

var dq = "Mukesh Ambani is "the richest man" of India.";  
Note: Do not forget to insert a backslash while escaping the quotation mark, especially when outside and inside quotes are the same.
Example: Print quotes using alternative String syntax
In this example, we will use alternative quotation mark inside and outside of a string. This means the same thing can be done with it. See the below example, how it will be done:

Copy Code

<html>  
<body>  
<script>  
var singleQ = "It's nine o' clock in the morning.";  
var doubleQ = 'Always say "Thank you" when anyone helps you.';  
document.write(singleQ + "</br>");  
document.write(doubleQ + "</br>");  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example: Use apostrophe to print single quote
In this example, we will use apostrophe in the middle of the single-quote string. See the below example, how it will be done:

Copy Code

<html>  
<body>  
<script>  
var ssq = 'It's an example of printing the single quote with string.';  
document.write(sq);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example: Use &quot to print double quote
In JavaScript, you can use &quot with a string to display string with double quotation mark. With &quot, you can use any quote. See the below example:

<html>  
<body>  
<script>  
var dq1 = "Always say " Thank you " when anyone helps you.";  
var dq2 = 'Always say " Thank you " when anyone helps you.';  
document.write(dq1 + "</br>");  
document.write(dq2);  
</script>  
</body>  
</html>  
 */